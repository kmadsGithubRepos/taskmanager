const express = require("express");
const mongoose = require("mongoose");
const taskRouter = require("./routes/tasks");
const logger = require("./middleware/logger");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static("./public"));
app.use(express.json());
app.use(logger);

app.use("/api/v1/tasks", taskRouter); //tasks.js routes

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("great server is up and running");
    });
  } catch (err) {
    console.log(err);
  }
};
start();
