const {pool} = require('./pool_config');

const tablaUsuarios = 'usuarios'

const conseguirUsuarios = (request, response) => {
  pool.query(`SELECT * FROM ${tablaUsuarios} ORDER BY userID ASC`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const conseguirUsuarioPorUsername = (request, response) => {
  const username = parseInt(request.params.username)

  pool.query(`SELECT * FROM ${tablaUsuarios} WHERE username = $1`, [username], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const camposTablaUsuarios = 'userID, soiAdmin, username, correo, contrasenia, nombre, estado, foto, descripcion'

const crearUsuario = (request, response) => {
  const {userID, soiAdmin, username, correo, contrasenia, nombre, estado, foto, descripcion} = request.body

  pool.query(`INSERT INTO ${tablaUsuarios} (${camposTablaUsuarios}) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [userID, soiAdmin, username, correo, contrasenia, nombre, estado, foto, descripcion], 
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with username: ${username}`)
  });
}

const actualizarUsuario = (request, response) => {
  const username = parseInt(request.params.username)
  const {nombre, estado, foto, descripcion} = request.body

  pool.query(
    `UPDATE ${tablaUsuarios} SET nombre = $1, estado = $2, foto = $3, descripcion = $4 WHERE username = $5`,
    [nombre, estado, foto, descripcion, username],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with username: ${username}`)
    }
  )
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
}