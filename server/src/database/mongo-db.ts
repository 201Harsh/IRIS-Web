import mongoose from "mongoose";

const ConnectTODB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI as string);
  } catch (error) {}
};

export default ConnectTODB;
