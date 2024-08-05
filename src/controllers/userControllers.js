const { createUser, getUser } = require("../models/user")
const uuid4 = require("../utils/uuid")

const createUserController = async (req, res) =>{
  try {
    let body =''
    req.on('data', (chunk) => { //define um evento que é acionado sempre que um novo chunk de dados é recebido.
      body += chunk;
    });
    req.on('end', async () => { //O evento end é acionado quando todos os dados da requisição foram recebidos.
      parsedBody = JSON.parse(body);
      
      const data ={
        id: uuid4(),
        name: parsedBody?.name,
        email: parsedBody?.email,
        password: parsedBody?.password,
        dateBirth:parsedBody?.dateBirth
      }
      try {
        await createUser(data)
        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.end('Usuário criado com sucesso!');
      } catch (error) {
        res.statusCode = 500;
        res.end(`Erro interno do servidor ${error}`);
      }
    }); 
  } catch (error) {
    console.log(error);
    throw error
  }
}

const getUserController = async (req, res) =>{
  try {
    const users = await getUser()
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.end(`Erro interno do servidor ${error}`);
  }
}

module.exports = {
  createUserController,
  getUserController
}