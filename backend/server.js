const express = require("express");
const userRoutes = require("./userRoutes.js");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./localENV.js");
const connect = require("./conn.js");
const WebSocket = require("ws");

const PORT = process.env.PORT || 9001;

const app = express();
const wss = new WebSocket.Server({ noServer: true });
app.use(cors("http://localhost:3000"));
app.use(bodyParser.json());
express.json();
app.use(userRoutes);

app.use("/game", express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("/app.js");
  console.log("Welcome to Shonen Showdown!");
});

app.get("/get-started", (req, res) =>
  res.json({ message: "Welcome to Shonen Showdown Dude!" })
);

app.post("/create-account", (req, res) => {
  console.log(req.body);
  res.status(201).send({ message: "Account created!" });
});

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
  });

  ws.send("something");
});

app.post("/create-account", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

app.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
    res.status(200).send(loginSuccess);
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
});

const server = app.listen(9001, () => {
  console.log(`Server running on ${PORT}`);
});

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});
