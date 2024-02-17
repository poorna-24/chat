import express from "express"; //package imports
import dotenv from "dotenv";

//file imports
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

import connectToDB from "./db/connectToMongoDB.js";

//variables
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); //from req.body

//middewares
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// app.get("/", (req, res) => res.send("hello chandu"));
app.listen(PORT, () => {
  connectToDB();
  console.log(`serve running at ${PORT}`);
});
