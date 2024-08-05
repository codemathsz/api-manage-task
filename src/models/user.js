require('dotenv').config();
const pool  = require('../db');

async function createUser(data){
  console.log('data >>>>>>>',data);
  try {
    const query = `
      INSERT INTO "manage-task".users(id, name, email, password, datebirth) 
      VALUES('${data.id}','${data.name}','${data.email}','${data.password}','${data.dateBirth}')
    `
    const response = await pool.query(query)
    console.log(response);
  } catch (error) {
    console.log('error create user: ', error);
    throw error
  }
}

async function getUser() {
  try {
    const query = `SELECT * FROM "manage-task".users`
    const response = await pool.query(query)
    return response
  } catch (error) {
    console.log('Erro ao buscar `users`: ', error);
    throw error
  }
}

async function getUserById(id) {
  try {
    const query = `SELECT * FROM "manage-task".users WHERE "manage-task".user.id === ${id}`
    const response = await pool.query(query)
    return response
  } catch (error) {
    console.log('Erro ao buscar `users`: ', error);
    throw error
  }
}

module.exports ={
  createUser,
  getUser,
  getUserById
}