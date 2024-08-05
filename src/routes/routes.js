const http = require('http')
const {createTaskController, getTasksController, updateTaskByIdController, deleteTaskByIdController} = require('../controllers/taskController')
const { createUserController, getUserController } = require('../controllers/userControllers')

const routes = async (req, res) =>{
  if(req.url === "/task"){
    taskRoutes(req, res)
  }else if(req.url === "/user"){
    userRoutes(req, res)
  }else{
    res.statusCode = 404;
    res.end(`Route ${req.url} Not Found`)
  }
}

const taskRoutes = async (req, res) =>{
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
}

const userRoutes = async (req, res) =>{
  switch(req.method){
    case 'POST':
      await createUserController(req, res)
      break;
    case 'GET':
      await getUserController(req, res)
      break;
    case 'PUT':
      break;
    case 'DELETE':
      break;
    default:
      res.statusCode = 405;
      res.end(`Method ${req.method} not allowed`)
  }
}

module.exports ={
  routes
} 