const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.USER_DATABASE,
  host: 'localhost',
  database: process.env.DATABASE,
  password: process.env.PASSWORD_DATABASE,
  port: process.env.PORT,
})

module.exports = pool