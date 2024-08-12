import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog");
    console.log("connected to database");
  } catch (error) {
    console.error("Error connecting to database", error);
    process.exit(1);
  }
};

export default connectdb;
