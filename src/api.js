const express = require("express");

const serverless = require("serverless-http");
var cors = require("cors");

const app = express();

const router = express.Router();

app.use(cors());

var corsOptions = {
  origin: "http://localhost:3000/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.get("/", cors(), (req, res) => {
  res.json({
    hello: "hi",
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
