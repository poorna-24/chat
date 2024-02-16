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

    const newUser = new User({
      fullName,
      username,
      password,
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
    });
  } catch (error) {
    console.log(`Internal issue`, error.message);
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
