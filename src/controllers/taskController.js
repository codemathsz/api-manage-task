const { getTasks, createTask } = require("../models/task");

const createTaskController = async (req, res) =>{
  try {
    let body = '';
    let data
    req.on('data', (chunk) => { //define um evento que é acionado sempre que um novo chunk de dados é recebido.
      body += chunk;
    });
    req.on('end', async () => { //O evento end é acionado quando todos os dados da requisição foram recebidos.
      const parsedBody = JSON.parse(body);
      data = {
        title: parsedBody.title || null,
        createDate: parsedBody.createDate || null
      }
      try {
        await createTask(res,data)
        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.end('Tarefa criada com sucesso!');
      } catch (error) {
        res.statusCode = 500;
        res.end(`Erro interno do servidor ${error}`);
      }
    }); 
  } catch (error) {
    
  }
}

const getTasksController = async (req, res) =>{
  // logic to get tasks
  try {
    const tasks = await getTasks()
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.end(`Erro interno do servidor ${error}`);
  }
}

const updateTaskByIdController = async (req, res) =>{}

const deleteTaskByIdController = async (req, res) =>{}

module.exports = {
  createTaskController,
  getTasksController,
  updateTaskByIdController,
  deleteTaskByIdController
};