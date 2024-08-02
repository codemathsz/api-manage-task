require('dotenv').config();
const pool = require('../db');
const uuid4 = require('../utils/uuid');

async function createTask(title){
  if(!title){
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Titulo da tarefa não recebido');
  }
  try {
    const id = uuid4()
    console.log(id);
    console.log(title);
    const query = `INSERT INTO "manage-task".task("ID", name) VALUES('${id}','${title}')`
    await pool.query(query)
  } catch (error) {
    console.log("Erro ao criar `tasks`: ", error); 
    throw error
  }
}

async function getTasks(){
  try {
    const query = `SELECT * FROM "manage-task".task`
    const result = await pool.query(query)
    return result.rows;
  } catch (error) {
   console.log("Erro ao buscar `tasks`: ", error); 
   throw error
  }
}

module.exports = {
  getTasks,
  createTask
}