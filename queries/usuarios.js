require('dotenv').config()
const {SECRET_KEY, SALT_ROUNDS} = process.env;
const {pool} = require('./pool_config');
const {respuesta, mensajeDeError} = require('./../global');
const {upload} = require('./../localMutler');

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const tablaUsuarios = 'usuarios'

const conseguirUsuarios = (request, response) => {
    const query = `
        SELECT userName, nombre, estado, foto, descripcion, insigniaFavorita 
        FROM ${tablaUsuarios} 
        ORDER BY userID ASC
    `;
    pool.query(query, (error, results) => {
        if (error) {
            return mensajeDeError(response, error, error.detail, error.detail, 408);
        }
        return response.status(200).json(results.rows)
    })
}

const conseguirUsuarioPorUsername = (request, response) => {
    const username = request.params.username
    const query = `
        SELECT userName, nombre, estado, foto, descripcion, insigniaFavorita 
        FROM ${tablaUsuarios} 
        WHERE username = $1
    `;
    pool.query(query, [username], (error, results) => {
        if (error) {
            return mensajeDeError(response, error, error.detail, error.detail, 408);
        }
        return response.status(200).json(results.rows[0])
    })
}

const login = (request, response) => {
    const {username, correo, contrasenia} = request.body

    if ((!username || !correo) && !contrasenia) {
        let msg = 'Falta campo en el cuerpo';
        return mensajeDeError(response, '', msg, msg, 400);
    }

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
            bcrypt.compare(contrasenia, results.rows[0].contrasenia, function(err, result) {
                if (err) {
                    let msg = 'Usuario/correo y contraseña incorrectos';
                    return mensajeDeError(response, err, msg, msg, 402);
                }
                const {username, soiadmin, nombre, estado, insigniafavorita} = results.rows[0]
                let user = {username, soiadmin, nombre, estado, insigniafavorita};
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

const crearUsuario = (request, response) => {
    upload(request, response, (err) => {
        if(err){
            console.log(err);
        } else {
            const {username, correo, contrasenia, nombre, estado, descripcion} = request.body

            if (!username || !correo || !contrasenia) {
                let msg = 'Falta campo en el cuerpo';
                return mensajeDeError(response, '', msg, msg, 400);
            }

            let fotoPath = '';
            console.log(request.file);
            if(request.file == undefined){
                fotoPath = ''
            } else {
                fotoPath = request.file.path;
            }

            let soiAdmin = false;
            let userID = uuidv4();
            
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
                    let msg = `User added with username: ${username}`;
                    return respuesta(response, msg, 200, {msg});
                });
            });
        }
    });
}

const actualizarUsuario = (request, response) => {
    upload(request, response, (err) => {
        jwt.verify(request.token, SECRET_KEY, (err, authData) => {
            if(err) {
                response.sendStatus(403);
            } else {
                const username = request.params.username
                const {nombre, estado, descripcion} = request.body

                let fotoPath = '';
                let fotoPathQuery = '';
                let arrArgumentos = [nombre, estado, descripcion, username]
                if (request.file){
                    fotoPathQuery = `, foto = $5`;
                    fotoPath = request.file.path
                    arrArgumentos.push(fotoPath);
                }
                const query = `
                    UPDATE ${tablaUsuarios} 
                    SET nombre = $1, estado = $2, descripcion = $3${fotoPathQuery}
                    WHERE username = $4
                `;
                pool.query(query, arrArgumentos, (error, results) => {
                        if (error) {
                            return mensajeDeError(response, error, error, error, 408);
                        } else {
                            const query = `
                                SELECT username, soiadmin, nombre, estado, insigniafavorita
                                FROM ${tablaUsuarios} 
                                WHERE username = $1
                            `;
                            pool.query(query, [username], (error, results) => {
                                if (error) {
                                    return mensajeDeError(response, error, error.detail, error.detail, 408);
                                }
                                const {username, soiadmin, nombre, estado, insigniafavorita} = results.rows[0];
                                let user = {username, soiadmin, nombre, estado, insigniafavorita};
                                jwt.sign({user}, SECRET_KEY, (error, token) => {
                                    if (error) {
                                        let msg = 'Error con JWT'
                                        return mensajeDeError(response, error, msg, msg, 408);
                                    } else {
                                        let msg = `Se actualizó la información correctamente de ${username}`
                                        return respuesta(response, msg, 200, {msg, token});
                                    }
                                });
                            })
                            
                        }
                    }
                )
            }
        });
        if(err){
            console.log(err);
        } else {
            
        }
    });
    
}

const borrarUsuario = (request, response) => {
    const username = parseInt(request.params.username)

    const query = `
        DELETE FROM ${tablaUsuarios} 
        WHERE username = $1
    `;
    pool.query(query, [username], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with username: ${username}`)
    })
}
module.exports = {
    conseguirUsuarios,
    conseguirUsuarioPorUsername,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario,
    login
}