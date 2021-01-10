// Variables de ambiente y globales
require('dotenv').config()
const {PORT} = process.env
const {respuesta, mensajeDeError, verifyToken} = require('./global');
const {upload} = require('./localMutler');

// Configuración del servidor con Exprees
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('uploads'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Ejemplo para subir foto al servidor
app.post('/profile', function (req, res, next) {
    console.log(req.file)
    upload(req, res, (err) => {
        if(err){
            let msg = err
            return mensajeDeError(res, error, msg, msg, 400);
        } else {
            if(req.file == undefined){
                let msg = 'Error: No File Selected!'
                return mensajeDeError(res, error, msg, msg, 400);
            } else {
                let msg = 'Archivo subido';
                return respuesta(res, msg, 200, {msg, file: `uploads/${req.file.filename}`});
            }
        }
    });
});

// Funciones para endpoints
const usuarios = require('./queries/usuarios')

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

// Endpoints de usuarios
app.get   ('/usuarios/conseguirUsuarios',           usuarios.conseguirUsuarios)
app.get   ('/usuarios/conseguirUsuario/:username',  usuarios.conseguirUsuarioPorUsername)
app.post  ('/usuarios/login',                       usuarios.login)
app.post  ('/usuarios/crearUsuario',                usuarios.crearUsuario)
app.put   ('/usuarios/actualizarUsuario/:username', verifyToken, usuarios.actualizarUsuario)
app.delete('/usuarios/borrarUsuario/:username',     verifyToken, usuarios.borrarUsuario)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})