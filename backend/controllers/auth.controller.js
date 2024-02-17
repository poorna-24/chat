import bcrypt from "bcryptjs";
import User from "../model/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, conformPassword, gender } = req.body;
    if (password !== conformPassword) {
      return res.status(400).json({ error: "incorrect password" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender == "male" ? boyProfilePic : girlProfilePic,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      gender: newUser.gender,
      profilePic: newUser.profilePic,
      password: newUser.password,
    });
  } catch (error) {
    console.log(`Internal issue in signup`, error.message);
    res.status(500).json({ error: "internal error" });
  }
};

export const login = (req, res) => {
  res.send("login");
  console.log("login");
};

export const logout = (req, res) => {
  res.send("login");
};
