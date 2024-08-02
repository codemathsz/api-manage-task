const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.USER_DATABASE,
  host: 'localhost',
  database: process.env.DATABASE,
  password: process.env.PASSWORD_DATABASE,
  port: process.env.PORT,
})

async function createTables(){
  try {
    pool.connect();
    await pool.query(`
      CREATE TABLE IF NOT EXISTS "manage-task".users (
        id UUID PRIMARY KEY,
        name VARCHAR(255) NOT NULL, 
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        dateBirth DATE NOT NULL
      );

      CREATE TABLE IF NOT EXISTS "manage-task".taskCategory (
        id UUID PRIMARY KEY,
        displayName VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS "manage-task".taskStatus (
        id UUID PRIMARY KEY,
        displayName VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS "manage-task".task (
        id UUID PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        createDate DATE NOT NULL,
        category_id UUID REFERENCES "manage-task".taskCategory(id),
        status_id UUID REFERENCES "manage-task".taskStatus(id),
        user_id UUID REFERENCES "manage-task".users(id)
      );
    `)
  } catch (error) {
    console.log(error);
    throw error
  }finally{
    await pool.end()
  }
}

createTables()
module.exports = pool