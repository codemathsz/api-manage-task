require('dotenv').config();
const pool = require('../db');
const uuid4 = require('../utils/uuid');

async function createTask(res,data){
  if(!data.title  || !data.createDate){
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end("ERRO_DADOS_OBRIGATÓRIOS_NÃO_ENVIADOS " +JSON.stringify(data));
    return
  }
  try {
    const id = uuid4()
    const query = `INSERT INTO task(id, title,createDate ) VALUES('${id}','${data.title}','${data.createDate}')`
    await pool.query(query)
  } catch (error) {
    console.log("Erro ao criar `tasks`: ", error); 
    throw error
  }
}

async function getTasks(){
  try {
    const query = `SELECT * FROM task`
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