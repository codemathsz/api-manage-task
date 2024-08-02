require('dotenv').config();
const pool = require('../db');

test('Teste de conexão com o banco de dados', () => {
  try {
    pool.connect();
  } catch (error) {
    throw error
  }
});