const express = require("express");
const app = express();
const fruitRouter = require("./routes/fruits");
const logger = require("./logger");

app.use(logger);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the FruityAPI");
});

app.use("/fruits", fruitRouter);

module.exports = app;
