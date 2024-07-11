import express from "express";
import dotenv from "dotenv";
// import connectDB from "./db/connectDB";
import mongoose from "mongoose";
import User from "./models/user.model.js";
dotenv.config();
const port = 5050;
const app = express();
app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Server started on ${port}`));
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.ATLAS_URI}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log("Error : ", err.message);
    process.exit(1);
  }
};
connectDB();
console.log("Connected to DB");

