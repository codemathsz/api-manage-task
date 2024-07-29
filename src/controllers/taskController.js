const { getTasks } = require("../models/task");

const createTaskController = async (req, res) =>{}

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