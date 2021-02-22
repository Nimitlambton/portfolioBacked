"use strict";
var express = require("express");

//initialize express server
var app = express();

//defining port number
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser);

//end points
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getPost", (req, res) => {
  res.send("Hello World!");
});

// start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(__dirname);
});
