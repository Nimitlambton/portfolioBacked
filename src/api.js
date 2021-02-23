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
    p2:
      "  I am Nimit pamnani ✨ Mobile & web developer 💻 || Amateur Photographer 📸 . ",
  });
});

router.get("/projects", (req, res) => {
  res.json({
    projectsList: [
      {
        title: "MemeNator",
        projectId: 1,
        desc:
          "This is my first project, that is build on React.js. It can be used to generate cool meme and edit images",
        repolink: "https://github.com/Nimitlambton/MN",
        DeployedLink: "https://meme-nator.netlify.app",
        thumbnail: Background,
        status: "completed",
      },
      {
        title: "Personal portfolio",
        status: "completed",
        projectId: 2,
        desc:
          "This is react based responsive Web App , used to showcase all the projects that are created till now ",
        repolink: "https://github.com/Nimitlambton/NimitpamnaniProfolio",
        DeployedLink: "https://nimitpamnani.rocks/#home",
        thumbnail: protfolioImg,
      },
      {
        title: "The Weather App",
        projectId: 3,
        desc:
          "This is weatherApp based on React.js , it can be used to fetch weather of any City in the world 🌏 ",
        repolink: "https://github.com/Nimitlambton/weatherApp",
        thumbnail: Weather,
        DeployedLink: "https://nimit-theweatherapp.netlify.app/",
        status: "completed",
      },
      {
        title: "MemeNator",
        projectId: 4,
        desc: "This is my first project, that is build on React.js",
        thumbnail: "",
        repolink: "",
        status: "",
      },
    ],
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
