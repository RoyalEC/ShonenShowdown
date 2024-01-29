const express = require("express");

const app = express();

const PORT = process.env.PORT || 9001;

app.use(express.static("./app.js"));
app.use("/game", express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("/app.js");
  console.log("Welcome to Shonen Showdown!");
});

app.get("/get-started", (req, res) =>
  res.json({ message: "Welcome to Shonen Showdown Dude!" })
);

app.listen(9001, (req, res) => {
  console.log(`Server running on ${PORT}`);
});

module.exports = app;
