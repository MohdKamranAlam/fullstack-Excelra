const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    taskData: String,
    completed: Boolean,
    date: { type: Date, default: Date.now }
  });
  
  // Create Todo Model
  module.exports= mongoose.model('Todo', todoSchema);
