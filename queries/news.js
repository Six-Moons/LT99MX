const {pool} = require('./pool_config');

const conseguirNoticias = (request, response) => {
    pool.query('SELECT * FROM noticias ORDER BY fecha_de_publicacion', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const conseguirNoticiaPorID = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM noticias WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const reaccionarANoticia = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO noticias (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
    })
}

const interactuarConNoticia = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO noticias (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
    })
}

module.exports = {
    conseguirNoticias,
    conseguirNoticiaPorID,
    reaccionarANoticia,
    interactuarConNoticia
}
