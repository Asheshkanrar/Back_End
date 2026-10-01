import mongoose from "mongoose";
import {DB_Name} from "./constant.js";
import express from "express";

const app = express();
(async () => {
  try {
    await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_Name}`);
      app.on("error", (error) => {
        console.error("Error connecting to MongoDB:", error);
        throw error;
      });

      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
})();