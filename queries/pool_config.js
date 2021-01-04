let {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER} = require('./../config');

const Pool = require('pg').Pool
const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
})

module.exports = {pool}