import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connect() {
  try {
    await mongoose.connect(process.env.ATLAS.URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
}

export default connect;
