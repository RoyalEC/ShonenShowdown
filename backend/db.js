import { mongoose } from "mongoose";
import { connect } from "./conn.js";

const bcrypt = require("bcrypt");
const saltRounds = 10; // or whatever salt rounds you deem appropriate

userSchema.pre("save", function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();

  // Generate a salt and hash the password
  bcrypt.hash(this.password, saltRounds, (err, hash) => {
    if (err) return next(err);
    // Override the plaintext password with the hashed one
    this.password = hash;
    next();
  });
});

async function main() {
  await connect();
  const mongoose = require("mongoose");

  // Card schema
  const cardSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    universe: {
      type: String,
      required: true,
    },
    description: String,
    imageUrl: {
      type: String,
      required: true,
    },
    rarity: {
      type: String,
      required: true,
    },
  });

  // User schema
  const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/, // Simple regex for email validation
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set to the current date
    },
    cards: [cardSchema], // Embedding card schema
  });

  // Compile model from schema
  const User = mongoose.model("User", userSchema);
  const Card = mongoose.model("Card", cardSchema);

  module.exports = { User, Card };

  const newUser = new User({
    username: "test",
    email: "test@example.com",
    password: "password",
  });
  newUser.save();

  const newCard = new Card({
    name: "Goku (Kid)",
    Universe: "Dragon Ball",
    description: "The main character of Dragon Ball",
    image_url:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fvsbattles%2Fimages%2F6%2F6a%2FKid_goku_render_dokkan_battle_by_maxiuchiha22_dccjed9.png%2Frevision%2Flatest%2Fscale-to-width-down%2F400%3Fcb%3D20190816231855&tbnid=1l4u-7AOj13G9M&vet=12ahUKEwjRoMnHuveDAxVVjIkEHfODBKUQMygAegQIARBz..i&imgrefurl=https%3A%2F%2Fvsbattles.fandom.com%2Fwiki%2FSon_Goku_(Dragon_Ball)&docid=StGNhRDCqXd_4M&w=370&h=580&q=goku%20kid&ved=2ahUKEwjRoMnHuveDAxVVjIkEHfODBKUQMygAegQIARBz",
    rarity: "C Tier",
  });

  const newCard2 = new Card({
    name: "Goku (UI)",
    Universe: "Dragon Ball",
    description: "The main character of Dragon Ball",
    image_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ebay.com%2Fitm%2F284982622729&psig=AOvVaw0LWbZFqRfnMRmkXsyQ9CiH&ust=1706234662147000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKjKz7m694MDFQAAAAAdAAAAABAE",
    rarity: "S Tier",
  });
}

main().catch(console.error);
