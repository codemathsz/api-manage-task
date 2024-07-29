require('dotenv').config();
const pool = require('../db')

async function getTasks(){
  try {
    const query = 'SELECT * FROM "manage-task".task'
    const result = await pool.query(query)
    return result.rows;
  } catch (error) {
   console.log("Erro ao buscar `tasks`: ", error); 
   throw error
  }
}

module.exports = {
  getTasks,
}