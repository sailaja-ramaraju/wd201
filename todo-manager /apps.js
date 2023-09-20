const {request,respone} =require('express') 
const express = require('express')
const app = express();
const {Todo} = require('./models')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/todos', function (request, response) {
    response.send('Todo List')
  })
  app.post('/todos',async(request,response)=>{
    console.log("Creating a todo",request.body)
    const todo = await Todo.addTodo({title: request.body.title ,dueDate: request.body.dueDate, completed: false})
    return response.json(todo)
  })
  app.put('/todos/:id/markAsCompleted',async(request,response)=>{
    console.log("We have to update a todo with ID: ",request.params.id)
    const todo = await Todo.findbyPk(request.params.id)
    const updatedTodo = await todo.markAsComplete()
    return response.json(updatedTodo)
  })
  app.delete('/todos/id',async(request,response)=>{
    console.log("Delete a todo by ID: ",request.params.id )
    const todo = await Todo.findbyPk(request.params.id)
    const DeleteTodo = await todo.Delete()
    return response.send(true)
  })
  app.listen(3000,()=>{
    console.log("Started express server at port 3000")
  })
