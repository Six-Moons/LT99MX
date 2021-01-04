// const express = require('express');
// const app = express();

// app.use(express.static('public'));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

// app.listen(8080, () => {
//   console.log('Server listening on http://localhost:8080');
// });

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const usuarios = require('./queries/usuarios')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

// Endpoints de usuarios
app.get   ('/usuarios/conseguirUsuarios',           usuarios.conseguirUsuarios)
app.get   ('/usuarios/conseguirUsuario/:username',  usuarios.conseguirUsuarioPorUsername)
app.post  ('/usuarios/login',                       usuarios.login)
app.post  ('/usuarios/crearUsuario',                usuarios.crearUsuario)
app.put   ('/usuarios/actualizarUsuario/:username', verifyToken, usuarios.actualizarUsuario)
app.delete('/usuarios/borrarUsuario/:username',     usuarios.borrarUsuario)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})