const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema ({
    text: String,
    isCheck: Boolean
});

const uri = "mongodb+srv://user:user@cluster0.x2u0b.mongodb.net/todoList?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const Task = mongoose.model("tasks", taskSchema)

  app.get('/', (req, res) => {

    const task = new Task({
      text: '1231412',
      isCheck: false
    });
    task.save().then(result => {
      res.send(result)
    });
  });

  app.get('/paramRequest', (req, res) => {
    Task.find().then(result => {
      res.send({data: result})
    });
  });

  app.listen(8000, () => {
  });