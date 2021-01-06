require('dotenv').config()
const {SECRET_KEY, SALT_ROUNDS} = process.env;
const {pool} = require('./pool_config');
const {respuesta, mensajeDeError, tablaUsuarios, tablaInsigniasObtenidas, tablaInsignias} = require('./../global');
const {upload} = require('./../localMutler');

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');

/*
    Función para conseguir información de todos los usuarios
*/
const conseguirUsuarios = (request, response) => {
    const query = `
        SELECT userID, username, nombre, estado, foto, descripcion, insigniaFavorita 
        FROM ${tablaUsuarios}
    `;

    pool.query(query, (error, results) => {
        if (error) {
            return mensajeDeError(response, error, error.detail, error.detail, 408);
        }

        const resultadosUsuarios = results.rows;

        const queryInsigniaFavorita = `
            SELECT username, titulo, ${tablaInsignias}.descripcion 
            FROM ${tablaUsuarios}, ${tablaInsignias}, ${tablaInsigniasObtenidas}
            WHERE username = $1 and ${tablaUsuarios}.userID = ${tablaInsigniasObtenidas}.userID and ${tablaInsignias}.insigniaID = ${tablaInsigniasObtenidas}.insigniaID
            `;
        
        let promesas = []
        let insigniasFavoritas = [];
        resultadosUsuarios.forEach(usuario => {
            promesas.push(pool.query(queryInsigniaFavorita, [usuario.username]))
        })

        Promise.all(promesas).then(values => {
            values.forEach(element => {
                insigniasFavoritas.push(...element.rows);
            });

            const query = `
                SELECT titulo, ${tablaInsignias}.descripcion, username
                FROM ${tablaInsignias} INNER JOIN ${tablaInsigniasObtenidas} ON (${tablaInsignias}.insigniaID = ${tablaInsigniasObtenidas}.insigniaID) INNER JOIN ${tablaUsuarios} ON (${tablaInsigniasObtenidas}.userID = ${tablaUsuarios}.userID) 
            `;
            pool.query(query, (error, results) => {
                if (error) {
                    return mensajeDeError(response, error, error.detail, error.detail, 408);
                }
                const resultadosInsignias = results.rows;

                let data = [];
                resultadosUsuarios.forEach(usuario => {
                    const {username, nombre, estado, foto, descripcion} = usuario;
                    let user = {username, nombre, estado, foto, descripcion, insigniafavorita: null, insignias: []};
                    
                    insigniasFavoritas.forEach(favorita => {
                        if (favorita.username == username) {
                            const {titulo, descripcion} = favorita;
                            user.insigniafavorita = {titulo, descripcion};
                        }
                    });

                    resultadosInsignias.forEach(insignia => {
                        if (insignia.username == username) {
                            const {titulo, descripcion} = insignia;
                            user.insignias.push({titulo, descripcion});
                        }
                    })

                    data.push(user);
                })

                return response.status(200).json(data);
            });
        });
    });
}

/*
    Función para conseguir información de un usuario dado su username
*/
const conseguirUsuarioPorUsername = (request, response) => {
    const username = request.params.username;
    const query = `
        SELECT userID, userName, nombre, estado, foto, descripcion, insigniaFavorita 
        FROM ${tablaUsuarios} 
        WHERE username = $1
    `;
    pool.query(query, [username], (error, results) => {
        if (error) {
            return mensajeDeError(response, error, error.detail, error.detail, 408);
        }

        const resultadosUsuarios = results.rows[0];
        const userID = resultadosUsuarios.userid;

        const queryInsigniaFavorita = `
            SELECT titulo, descripcion 
            FROM ${tablaInsignias}
            WHERE ${tablaInsignias}.insigniaID = $1
        `;
        pool.query(queryInsigniaFavorita, [results.rows[0].insigniafavorita], (error, results) => {

            const {titulo, descripcion} = results.rows[0];
            const insigniaFavorita = {titulo, descripcion};

            const query = `
                SELECT titulo, descripcion
                FROM ${tablaInsignias} INNER JOIN ${tablaInsigniasObtenidas} ON (${tablaInsignias}.insigniaID = ${tablaInsigniasObtenidas}.insigniaID)
                WHERE ${tablaInsigniasObtenidas}.userID = $1
            `;
            pool.query(query, [userID], (error, results) => {
                if (error) {
                    return mensajeDeError(response, error, error.detail, error.detail, 408);
                }

                const resultadosInsignias = results.rows;
    
                const {username, nombre, estado, foto, descripcion} = resultadosUsuarios;
                let user = {username, nombre, estado, foto, descripcion, insigniafavorita: insigniaFavorita || null, insignias: resultadosInsignias};
            
                return response.status(200).json(user);
            });
        });
    });
}

/*
    Funnción para hacer login.
    Regresa un webtoken
*/
const login = (request, response) => {
    const {username, correo, contrasenia} = request.body

    // Comprobación de que no falte ni un campo dentro del cuerpo del request
    if ((!username || !correo) && !contrasenia) {
        let msg = 'Falta campo en el cuerpo';
        return mensajeDeError(response, '', msg, msg, 400);
    }

    // Checa si se iniciara sesión con el username o correo
    let loginUsuario = ((username) ? 'username' : 'correo')
    let varLogin = ((username) ? username : correo);

    const query = `
        SELECT * 
        FROM ${tablaUsuarios} 
        WHERE ${loginUsuario} = $1
    `;
    pool.query(query, [varLogin], (error, results) => {
        if (error) {
            return mensajeDeError(response, error, error.detail, error.detail, 408);
        } else if (results.rows.length) {
            // Compara la contraseña dada con la contraseña encriptada dentro de la base de datos

            bcrypt.compare(contrasenia, results.rows[0].contrasenia, function(err, result) {
                if (err) {
                    let msg = 'Usuario/correo y contraseña incorrectos';
                    return mensajeDeError(response, err, msg, msg, 402);
                }

                // Creación el payload para el webtoken
                const {username, soiadmin, nombre, estado, insigniafavorita} = results.rows[0]
                let user = {username, soiadmin, nombre, estado, insigniafavorita};

                // Genera del webtoken y se lo manda al usuario
                jwt.sign({user}, SECRET_KEY, (error, token) => {
                    if (error) {
                        let msg = 'Error con JWT';
                        return mensajeDeError(response, error, msg, msg, 408);
                    } else {
                        let msg = `Login correcto de: ${varLogin}`;
                        return respuesta(response, msg, 200, {msg, token});
                    }
                });

            });
        } else {
            let msg = 'No se encontró usuario/correo';
            return mensajeDeError(response, error, msg, msg, 404);
        }
    });
}

/*
    Funnción para crear un usuario.
    Regresa un webtoken
*/
const crearUsuario = (request, response) => {
    // Función para permitir la carga de archivos
    upload(request, response, (err) => {
        if(err){
            console.log(err);
        } else {
            const {username, correo, contrasenia, nombre, estado, descripcion} = request.body

            // Comprobación de que no falte ni un campo dentro del cuerpo del request
            if (!username || !correo || !contrasenia) {
                let msg = 'Falta campo en el cuerpo';
                return mensajeDeError(response, '', msg, msg, 400);
            }

            // Checa si se subió alguna foto para guardar el path dentro de la base de datos;
            let fotoPath = ((request.file == undefined) ? '' : request.file.path) ;

            // Genera el ID del usuario y se le asigna que no es administrador
            let soiAdmin = false;
            let userID = uuidv4();
            
            // Encripta la contraseña dada
            bcrypt.hash(contrasenia, parseInt(SALT_ROUNDS), function(err, hash) {
                if (err) {
                    return mensajeDeError(response, err, err, err, 408);
                }
                let contraseniaEncriptada = hash;
                const query = `
                    INSERT INTO ${tablaUsuarios} 
                    (userID, soiAdmin, username, correo, contrasenia, nombre, estado, foto, descripcion) VALUES 
                    ($1,     $2,       $3,       $4,     $5,          $6,     $7,     $8,   $9)
                `;
                pool.query(query, [userID, soiAdmin, username, correo, contraseniaEncriptada, nombre, estado, fotoPath, descripcion], (error, results) => {
                    if (error) {
                        return mensajeDeError(response, error, error.detail, error.detail, 408);
                    }

                    // Creación del payload para el webtoken
                    let user = {username, soiadmin: false, nombre, estado, insigniafavorita: null};

                    // Genera el webtoken y se lo manda al usuario
                    jwt.sign({user}, SECRET_KEY, (error, token) => {
                        if (error) {
                            let msg = 'Error con JWT';
                            return mensajeDeError(response, error, msg, msg, 408);
                        } else {
                            let msg = `Usuario creado correctamente`;
                            return respuesta(response, msg, 200, {msg, token});
                        }
                    });
                });
            });
        }
    });
}

/*
    Funnción para actualizar la información de un usuario.
    Regresa un webtoken
*/
const actualizarUsuario = (request, response) => {
    // Función para permitir la carga de archivos
    upload(request, response, (err) => {

        // Verifica que el webtoken dado por el usuario sea correcta
        jwt.verify(request.token, SECRET_KEY, (err, authData) => {
            if(err) {
                response.sendStatus(403);
            } else {
                const username = request.params.username
                const {nombre, estado, descripcion} = request.body

                // Busca el path de la foto actual del usuario
                const queryPath = `
                    SELECT foto
                    FROM ${tablaUsuarios} 
                    WHERE username = $1
                `;
                pool.query(queryPath, [username], (error, results) => {
                    if (error) {
                        return mensajeDeError(response, error, error.detail, error.detail, 408);
                    }
                    const {foto} = results.rows[0]; // Path de la foto actual del usuario
                    let arrArgumentos = [nombre, estado, descripcion, username] // Datos del usuario que se actualizaran

                    /*
                        Checa si se subió algún archivo
                        Si sí, agrega el path del archivo a los datos del usuario que se actualizaran
                        y checa si el usuario ya tenía una foto. Si sí, borra la foto vieja.
                    */
                    if (request.file){
                        fotoPathQuery = `, foto = $5`;
                        arrArgumentos.push(request.file.path);
                        if (foto) {
                            fs.unlink(foto, (err) => {
                                if (err) {
                                    console.error(err)
                                    return
                                }
                            })
                        }
                    }

                    // Actualiza la información
                    const query = `
                        UPDATE ${tablaUsuarios} 
                        SET nombre = $1, estado = $2, descripcion = $3${fotoPathQuery}
                        WHERE username = $4
                    `;
                    pool.query(query, arrArgumentos, (error, results) => {
                        if (error) {
                            return mensajeDeError(response, error, error, error, 408);
                        } else {

                            // Creación del payload para el webtoken
                            let user = {username, soiadmin: authData.soiadmin, nombre, estado, insigniafavorita};

                            // Genera el webtoken y se lo manda al usuario
                            jwt.sign({user}, SECRET_KEY, (error, token) => {
                                if (error) {
                                    let msg = 'Error con JWT'
                                    return mensajeDeError(response, error, msg, msg, 408);
                                } else {
                                    let msg = `Se actualizó la información correctamente de ${username}`
                                    return respuesta(response, msg, 200, {msg, token});
                                }
                            });
                        }
                    });
                });
            }
        });
    });
    
}

/*
    Funnción para borrar un usuario.
*/
const borrarUsuario = (request, response) => {

    // Verifica que el webtoken dado por el usuario sea correcta
    jwt.verify(request.token, SECRET_KEY, (err, authData) => {
        if(err) {
            return response.sendStatus(403);
        } else {

            // Checa si el usuario haciendo el request es administrador
            let adminUsername = authData.user.username
            const query = `
                SELECT userName, soiadmin 
                FROM ${tablaUsuarios} 
                WHERE username = $1
            `;
            pool.query(query, [adminUsername], (error, results) => {
                if (error) {
                    return mensajeDeError(response, error, error.detail, error.detail, 408);
                }

                // Comprueba si el usuario que hizo el request es admin
                if (results.rows[0].soiadmin) {
                    const username = request.params.username

                    // Busca el path de la foto del usuario a borrar
                    const queryPath = `
                        SELECT foto, userID
                        FROM ${tablaUsuarios} 
                        WHERE username = $1
                    `;
                    pool.query(queryPath, [username], (error, results) => {
                        if (error) {
                            return mensajeDeError(response, error, error.detail, error.detail, 408);
                        }

                        // Borra la foto del usuario que se quiere borrar
                        const {foto, userid} = results.rows[0];
                        if (foto) {
                            fs.unlink(foto, (err) => {
                                if (err) {
                                    console.error(err)
                                    return
                                }
                            })
                        }

                        // Borra las insignias obtenidas por el usuario
                        const query = `
                            DELETE FROM ${tablaInsigniasObtenidas} 
                            WHERE userid = $1
                        `;
                        pool.query(query, [userid], (error, results) => {
                            if (error) {
                                throw error
                            }
                            // Borra el usuario
                            const query = `
                                DELETE FROM ${tablaUsuarios} 
                                WHERE username = $1
                            `;
                            pool.query(query, [username], (error, results) => {
                                if (error) {
                                    throw error
                                }
                                let msg = ((results.rowCount > 0) ? `Se borró el usuario ${username} correctamente` : 'No se encontró el usuario');
                                return respuesta(response, msg, 200, {msg});
                            })
                        })

                    });
                } else {
                    return response.sendStatus(403);
                }
            })

        
        }
    });
}

const asignarInsigniaUsuario = (request, response) => {
// Verifica que el webtoken dado por el usuario sea correcta
jwt.verify(request.token, SECRET_KEY, (err, authData) => {
    if(err) {
        return response.sendStatus(403);
    } else {

        // Checa si el usuario haciendo el request es administrador
        let adminUsername = authData.user.username
        const query = `
            SELECT userName, soiadmin 
            FROM ${tablaUsuarios} 
            WHERE username = $1
        `;
        pool.query(query, [adminUsername], (error, results) => {
            if (error) {
                return mensajeDeError(response, error, error.detail, error.detail, 408);
            }

            // Comprueba si el usuario que hizo el request es admin
            if (results.rows[0].soiadmin) {
                const {username, titulo} = request.body

                // Busca el path de la foto del usuario a borrar
                const queryPath = `
                    SELECT userID
                    FROM ${tablaUsuarios} 
                    WHERE username = $1
                `;
                pool.query(queryPath, [username], (error, results) => {
                    if (error) {
                        return mensajeDeError(response, error, error.detail, error.detail, 408);
                    }
                    if (results.rows[0]) {
                        const userID = results.rows[0].userid;
                        const queryPath = `
                            SELECT insigniaID
                            FROM ${tablaInsignias} 
                            WHERE titulo = $1
                        `;
                        pool.query(queryPath, [titulo], (error, results) => {
                            if (error) {
                                return mensajeDeError(response, error, error.detail, error.detail, 408);
                            }
                            if (results.rows[0]) {
                                const insigniaID = results.rows[0].insigniaid;
                                const fecha = new Date();
        
                                const query = `
                                    INSERT INTO ${tablaInsigniasObtenidas} 
                                    (userID, insigniaID, fechaDeObtencion) VALUES 
                                    ($1, $2, $3)
                                `;
                                pool.query(query, [userID, insigniaID, fecha], (error, results) => {
                                    if (error) {
                                        return mensajeDeError(response, error, error.detail, error.detail, 408);
                                    }
                                    
                                    let msg = `Se asignó correctamente la insignia ${titulo} a ${username}`;
                                    return respuesta(response, msg, 200, {msg, username, titulo});
                                });
                            } else {
                                let msg = 'Insignia no encontrada'
                                return mensajeDeError(response, '', msg, msg, 408);
                            }
                            
                        });
                    } else {
                        let msg = 'Usuario no encontrado'
                        return mensajeDeError(response, '', msg, msg, 408);
                    }
                });
            } else {
                return response.sendStatus(403);
            }
        })
    }
});
}

module.exports = {
    conseguirUsuarios,
    conseguirUsuarioPorUsername,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario,
    login,
    asignarInsigniaUsuario
}