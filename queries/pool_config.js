const Pool = require('pg').Pool
const pool = new Pool({
  user: 'aleuwu',
  host: 'localhost',
  database: 'tetris_test',
  password: 'aleuwu',
  port: 5432,
})

module.exports = {pool}