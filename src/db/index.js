import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL} / ${DB_NAME}`
    );
    console.log(`Connection Successful! ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(process.env.MONGODB_URL);
    console.error("Couldn't connect to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
