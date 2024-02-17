import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: "string",
    required: true,
  },
  username: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
    minimum: 1,
  },
  gender: {
    type: "string",
    required: true,
    enum: ["male", "female"],
  },
  profilePic: {
    type: "string",
    default: "",
  },
});
const User = mongoose.model("User", userSchema);
export default User;
