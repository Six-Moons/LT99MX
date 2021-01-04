const {pool} = require('./pool_config');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 2;

const tablaUsuarios = 'usuarios'
const infoUsuario = 'userName, nombre, estado, foto, descripcion, insigniaFavorita';

const conseguirUsuarios = (request, response) => {
  
    pool.query(`SELECT ${infoUsuario} FROM ${tablaUsuarios} ORDER BY userID ASC`, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
}

const conseguirUsuarioPorUsername = (request, response) => {
    const username = request.params.username
    console.log(username);
    pool.query(`SELECT ${infoUsuario} FROM ${tablaUsuarios} WHERE username = $1`, [username], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows[0])
    })
}

const login = (request, response) => {
    const {username, correo, contrasenia} = request.body

    if ((!username || !correo) && !contrasenia) {
        response.statusMessage = 'Falta campo';
        let statusCode = 400;
        return response.status( statusCode ).json({
            status : statusCode,
            message : response.statusMessage
        })
    }

    let loginUsuario = ((username) ? 'username' : 'correo')
    let varLogin = ((username) ? username : correo);

    pool.query(`SELECT * FROM ${tablaUsuarios} WHERE ${loginUsuario} = $1`, [varLogin], 
    (error, results) => {
        if (error) {
            console.log(error);
            response.statusMessage = error.detail;
            let statusCode = 408;
            return response.status( statusCode ).json({
                status : statusCode,
                message : response.statusMessage
            })
        } else if (results.rows.length) {
            bcrypt.compare(contrasenia, results.rows[0].contrasenia, function(err, result) {
                if (result) {
                    const {username, soiadmin, nombre, estado, insigniafavorita} = results.rows[0]
                    let user = {username, soiadmin, nombre, estado, insigniafavorita};
                    jwt.sign({user}, 'secretkey', (error, token) => {
                        if (error) {
                            console.log(error);
                            // response.statusMessage = error;
                            response.statusMessage = 'Error con JWT';
                            let statusCode = 408;
                            return response.status( statusCode ).json({
                                status: statusCode,
                                message: response.statusMessage,
                                error
                            })
                        } else {
                            response.status(200).json({
                                message: `Login correcto de: ${varLogin}`,
                                token
                            });
                        }
                    });
                } else {
                    response.statusMessage = 'Usuario/correo y contraseña incorrectos';
                    let statusCode = 402;
                    return response.status( statusCode ).json({
                        status : statusCode,
                        message : response.statusMessage
                    })
                }

            });
        } else {
            response.statusMessage = 'No se encontró usuario/correo';
            let statusCode = 404;
            return response.status( statusCode ).json({
                status : statusCode,
                message : response.statusMessage
            })
        }
    });
}

const camposTablaUsuarios = 'userID, soiAdmin, username, correo, contrasenia, nombre, estado, foto, descripcion'

const crearUsuario = (request, response) => {
    const {username, correo, contrasenia, nombre, estado, archivoFoto, descripcion} = request.body
    let soiAdmin = false;
    let userID = uuidv4();
    let fotoPath = 'path/to/file';
    bcrypt.hash(contrasenia, saltRounds, function(err, hash) {
        let contraseniaEncriptada = hash;
        pool.query(`INSERT INTO ${tablaUsuarios} (${camposTablaUsuarios}) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [userID, soiAdmin, username, correo, contraseniaEncriptada, nombre, estado, fotoPath, descripcion], 
        (error, results) => {
            if (error) {
                console.log(error);
                response.statusMessage = error.detail;
                let statusCode = 408;
                return response.status( statusCode ).json({
                    status : statusCode,
                    message : response.statusMessage
                })
            }
            response.status(201).send(`User added with username: ${username}`)
        });
    });

}

const actualizarUsuario = (request, response) => {
    jwt.verify(request.token, 'secretkey', (err, authData) => {
        if(err) {
            response.sendStatus(403);
        } else {
            response.status(200).json({
                message: `User modified with username`,
                authData
            });
        }
    });
    // const username = parseInt(request.params.username)
    // const {nombre, estado, foto, descripcion} = request.body

    // pool.query(
    //     `UPDATE ${tablaUsuarios} SET nombre = $1, estado = $2, foto = $3, descripcion = $4 WHERE username = $5`,
    //     [nombre, estado, foto, descripcion, username],
    //     (error, results) => {
    //         if (error) {
    //             throw error
    //         }
    //         response.status(200).send(`User modified with username: ${username}`)
    //     }
    // )
}

const borrarUsuario = (request, response) => {
    const username = parseInt(request.params.username)

    pool.query(`DELETE FROM ${tablaUsuarios} WHERE username = $1`, [username], (error, results) => {
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