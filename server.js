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

// Endpoints de usuarios
app.get   ('/usuarios',             usuarios.conseguirUsuarios)
app.get   ('/usuarios/:username',   usuarios.conseguirUsuarioPorUsername)
app.post  ('/usuarios',             usuarios.crearUsuario)
app.put   ('/usuarios/:username',   usuarios.actualizarUsuario)
app.delete('/usuarios/:username',   usuarios.borrarUsuario)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})