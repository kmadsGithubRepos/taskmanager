const express = require("express");
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

const router = express.Router();

// get /api/v1/tasks //get all the items
router.get("/", getAllTasks);

// post /api/v1/tasks //create a new task
router.post("/", createTask);

// get /api/v1/tasks/:id //get a particular item
router.get("/:id", getTask);

// patch /api/v1/tasks/:id //update a particular task
router.patch("/:id", updateTask);

// delete /api/v1/tasks/:id //delete a particular item
router.delete("/:id", deleteTask);

module.exports = router;
