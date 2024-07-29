const http = require('http')
const {createTaskController, getTasksController, updateTaskByIdController, deleteTaskByIdController} = require('../controllers/taskController')

const taskRoutes = async (req, res) =>{
  if(req.url === "/task"){
    switch(req.method){
      case 'POST':
        await createTaskController(req, res)
        break;
      case 'GET':
        await getTasksController(req, res)
        break;
      case 'PUT':
        await updateTaskByIdController(req, res)
        break;
      case 'DELETE':
        await deleteTaskByIdController(req, res)
        break;
      default:
        res.statusCode = 405;
        res.end(`Method ${req.method} not allowed`)
    }
  }else{
    res.statusCode = 404;
    res.end(`Route ${req.url} Not Found`)
  }
}

module.exports = taskRoutes