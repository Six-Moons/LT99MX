require('dotenv').config()
const {SECRET_KEY} = process.env;
const {pool} = require('./pool_config');
const {respuesta, mensajeDeError, tablaInsignias, tablaUsuarios} = require('./../global');
const {upload} = require('./../localMutler');

const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const fs = require('fs');


/*
    Función para conseguir información de todos los usuarios
*/
const conseguirInsignias = (request, response) => {
    const query = `
        SELECT titulo, descripcion 
        FROM ${tablaInsignias} 
        ORDER BY insigniaID ASC
    `;
    pool.query(query, (error, results) => {
        if (error) {
            return mensajeDeError(response, error, error.detail, error.detail, 408);
        }
        let msg = 'Insignias conseguidas correctamente';
        return respuesta(response, msg, 200, {msg, data: results.rows});
    })
}

const conseguirInsigniaPorTitulo = (request, response) => {
    const titulo = request.params.titulo;
    const query = `
        SELECT titulo, descripcion 
        FROM ${tablaInsignias} 
        WHERE titulo = $1
    `;
    pool.query(query, [titulo], (error, results) => {
        if (error) {
            return mensajeDeError(response, error, error.detail, error.detail, 408);
        }
        let msg = 'Insignia conseguida correctamente';
        return respuesta(response, msg, 200, {msg, data: results.rows});
    })
}

const crearInsignia = (request, response) => {
    jwt.verify(request.token, SECRET_KEY, (err, authData) => {

        if(err) {
            return response.sendStatus(403);
        } else {
            const adminUsername = authData.user.username
            const query = `
                SELECT username, soiadmin 
                FROM ${tablaUsuarios} 
                WHERE username = $1
            `;
            pool.query(query, [adminUsername], (error, results) => {
                if (error) {
                    return mensajeDeError(response, error, error.detail, error.detail, 408);
                }
                if (results.rows[0].soiadmin) {
                    const id = uuidv4();
                    const {titulo, descripcion} = request.body;
                    const query = `
                        INSERT INTO ${tablaInsignias} 
                        (insigniaID, titulo, descripcion) VALUES 
                        ($1,         $2,     $3)
                    `;
                    pool.query(query, [id, titulo, descripcion], (error, results) => {
                        if (error) {
                            return mensajeDeError(response, error, error.detail, error.detail, 408);
                        }
                        let msg = 'Insignia creada correctamente';
                        return respuesta(response, msg, 200, {msg, data: {titulo, descripcion}});
                    })
                } else {
                    return response.sendStatus(403);
                }
            });
        }
    });
}

const actualizarInsignia = (request, response) => {
    jwt.verify(request.token, SECRET_KEY, (err, authData) => {

        if(err) {
            return response.sendStatus(403);
        } else {
            const adminUsername = authData.user.username
            const query = `
                SELECT username, soiadmin 
                FROM ${tablaUsuarios} 
                WHERE username = $1
            `;
            pool.query(query, [adminUsername], (error, results) => {
                if (error) {
                    return mensajeDeError(response, error, error.detail, error.detail, 408);
                }
                if (results.rows[0].soiadmin) {
                    const titulo = request.params.titulo;
                    const {nuevoTitulo, descripcion} = request.body;
                    const query = `
                        UPDATE ${tablaInsignias} 
                        SET titulo = $1, descripcion = $2
                        WHERE titulo = $3
                    `;
                    pool.query(query, [nuevoTitulo, descripcion, titulo], (error, results) => {
                        if (error) {
                            return mensajeDeError(response, error, error.detail, error.detail, 408);
                        }
                        if (results.rowCount > 0) {
                            let msg = 'Insignia actualizada correctamente';
                            return respuesta(response, msg, 200, {msg, data: {titulo, nuevoTitulo, descripcion}});
                        } else {
                            let msg = 'No se encontró la insignia';
                            return mensajeDeError(response, '', msg, msg, 404);
                        }
                    })
                } else {
                    return response.sendStatus(403);
                }
            });
        }
    });
}

module.exports = {
    conseguirInsignias,
    conseguirInsigniaPorTitulo,
    crearInsignia,
    actualizarInsignia
}