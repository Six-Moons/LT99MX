require('dotenv').config()
const {pool} = require('./pool_config');
const {respuesta, mensajeDeError} = require('./../global');
const {upload} = require('./../localMutler');

const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const tablaInsgnias = 'insignias' // Nombre de la tabla de usuarios dentro de la base de datos

/*
    Función para conseguir información de todos los usuarios
*/
const conseguirInsignias = (request, response) => {
    const query = `
        SELECT userName, nombre, estado, foto, descripcion, insigniaFavorita 
        FROM ${tablaInsgnias} 
        ORDER BY insigniaID ASC
    `;
    pool.query(query, (error, results) => {
        if (error) {
            return mensajeDeError(response, error, error.detail, error.detail, 408);
        }
        return response.status(200).json(results.rows)
    })
}

module.exports = {
    conseguirInsignias
}