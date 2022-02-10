const Task = require("../../db/models/task/index");

module.exports.getAllTasks = (req, res) => {
  Task.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewTask = (req, res) => {
  const task = new Task(req.body);
  task.save().then((result) => {
    Task.unshift(task)
    res.send({data: result});
  });
};

module.exports.deleteTask = (req, res) => {
  const id = req.query.id;
  if (id) {
    Task.deleteOne({ _id: id }).then(() => {
      Task.find().then((result) => {
        res.send({data: result});
      });
    });
  } else console.log("id not found");
};

module.exports.changeTaskInfo = (req, res) => {
  const body = req.body;
  Task.updateOne({ _id: body._id }, body).then((result) => {
    Task.find().then((result) => {
      res.send({ data: result });
    });
  });
};
