import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connected to DB");
  } catch (error) {
    console.log(`error in connection`, error.message);
  }
};

export default connectToDB;
