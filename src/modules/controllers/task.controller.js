const Task = require("../../db/models/task/index");

module.exports.getAllTasks = (req, res) => {
  try {
    Task.find().then((result) => {
      res.send({ data: result });
    });
  } catch (error) {
    res.send(console.log(error));
  }
};

module.exports.createNewTask = (req, res) => {
  const text = req.body.text
  if(text !== ""){
    const task = new Task(req.body);
    task.save().then((result) => {
      Task.find().then((result) => {
        res.send({ data: result });
      })
    });
  } else console.log("text not found");
};

module.exports.deleteTask = (req, res) => {
  const id = req.query.id;
  if (id) {
    Task.deleteOne({ _id: id }).then(() => {
      Task.find().then((result) => {
        res.send({ data: result });
      });
    });
  } else console.log("id not found");
};

module.exports.changeTaskInfo = (req, res) => {
  const id = req.body.id;
  Task.updateOne({ _id: id }, req.body).then(() => {
    Task.find().then((result) => {
      res.send({ data: result });
    });
  });
};
