require("./localENV.js");
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
}

connect();

module.exports = connect;
