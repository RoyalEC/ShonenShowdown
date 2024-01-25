import express from "express";

// const express = require("express");
const app = express();

const PORT = process.env.PORT || 9001;

app.use(express.static("./app.js"));

app.get("/", (req, res) => {
  res.status(200).send("/app.js");
  console.log("Welcome to Shonen Showdown!");
});

app.listen(9001, (req, res) => {
  console.log(`Server running on ${PORT}`);
});
