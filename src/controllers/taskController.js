const createTaskController = async (req, res) =>{}

const getTasksController = async (req, res) =>{
  // logic to get tasks
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(`GET TASKS!!!!!\n`);
}

const updateTaskByIdController = async (req, res) =>{}

const deleteTaskByIdController = async (req, res) =>{}

module.exports = {
  createTaskController,
  getTasksController,
  updateTaskByIdController,
  deleteTaskByIdController
};