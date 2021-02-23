const express = require("express");

const serverless = require("serverless-http");
var cors = require("cors");

const app = express();

const router = express.Router();

app.use(cors());

router.get("/", (req, res) => {
  res.json({
    hello: "hi",
  });
});

router.get("/jumbtron", (req, res) => {
  res.json({
    h1: "Hi 👋 , Thanks for Stoping by",
    p: "Currently learning MERN Stack & ReactNative ",
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
