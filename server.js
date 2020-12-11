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
const users = require('./queries/users')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

// User endpoints
app.get('/users',         users.getUsers)
app.get('/users/:id',     users.getUserById)
app.post('/users',        users.createUser)
app.put('/users/:id',     users.updateUser)
app.delete('/users/:id',  users.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})