const express = require('express');

module.exports = function(server){

  // API Routes
  const router = express.Router();
  server.use('/api', router);

  // toDo routes
  const toDoService = require('../api/todo/toDoService');
  toDoService.register(router, '/todos');
}