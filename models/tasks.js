const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    maxlength: [20, "name length must not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const model = mongoose.model("Task", TaskSchema);

module.exports = model;
