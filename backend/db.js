import { mongoose } from "mongoose";
import { connect } from "./conn.js";

async function main() {
  await connect();

  const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    created_at: Date,
    cards: [{ cardSchema }],
  });

  const cardSchema = new mongoose.Schema({
    name: String,
    Universe: String,
    description: String,
    image_url: String,
    rarity: String,
  });

  const User = mongoose.model("User", userSchema);
  const Card = mongoose.model("Card", cardSchema);

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
