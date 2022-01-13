const TasksModel = require("../models/tasks");
const asycnWrapper = require("../middleware/asyncwrapper");

const getAllTasks = asycnWrapper(async (req, res) => {
  const tasks = await TasksModel.find({});
  res.json(tasks);
});

const createTask = asycnWrapper(async (req, res) => {
  const ret = await TasksModel.create(req.body);
  res.json(ret);
});

const getTask = asycnWrapper(async (req, res) => {
  const ret = await TasksModel.findOne({ _id: req.params.id });
  if (ret) res.json(ret);
  else res.status(404).send("not found");
});

const updateTask = asycnWrapper(async (req, res) => {
  const ret = await TasksModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );
  if (ret) res.json(ret);
  else res.status(404).send("not found");
});

const deleteTask = asycnWrapper(async (req, res) => {
  const ret = await TasksModel.findOneAndDelete({ _id: req.params.id });
  if (ret) res.json(ret);
  else res.status(404).send("not found");
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
