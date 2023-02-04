const express = require('express');
const Todo = require('../model/CRUD');
const router = express.Router()

// R - Read
router.get('/todos',async (req, res) => {
    Todo.find({}, (err, todos) => {
        if (err) return res.status(500).send(err);
        return res.send(todos);
    });
});
router.get('/todos/:id', (req, res) => {
    Todo.findById(req.params.id, (error, data) => {
      if (error) {
        res.status(500).send(error)
      } else if (!data) {
        res.status(404).send('Data not found.')
      } else {
        res.send(data)
      }
    })
  })

router.post("/todos",  async(req, res) => {
    let task = req.body.taskData
    if (!task) {
        return res.status(400).json({ message: 'Task field required' })
    }
    const duplicateTask =   await Todo.findOne( {taskData:task} )
    if (duplicateTask) {
        return res.status(409).json({ message: 'Duplicate Task' })
    }
    const todo = new Todo({
        taskData: task,
    });
    console.log(todo)
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// U - Update
router.put('/todos/:id', (req, res) => {
    Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, todo) => {
            if (err) return res.status(500).send(err);
            return res.send(todo);
        }
    );
});

// D - Delete
router.delete('/todos/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, todo) => {
        if (err) return res.status(500).send(err);
        return res.send({ message: 'Todo successfully deleted', todo });
    });
});

module.exports = router