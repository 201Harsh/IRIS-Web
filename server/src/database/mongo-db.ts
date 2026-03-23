import mongoose from "mongoose";

const ConnectTODB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default ConnectTODB;
