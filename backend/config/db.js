import * as dotenv from "dotenv";

import mongoose from "mongoose";
dotenv.config();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose connected successfully");
  } catch (error) {
    console.log("Mongo Db connection Error", error);
    process.exit(1);
  }
};
export default connectDb;
