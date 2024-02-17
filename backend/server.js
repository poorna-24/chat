import express from "express"; //package imports
import dotenv from "dotenv";

import connectToDB from "./db/connectToMongoDB.js"; //file imports
import authRoutes from "./routes/auth.routes.js";

//variables
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); //from req.body

//middewares
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => res.send("hello chandu"));
app.listen(PORT, () => {
  connectToDB();
  console.log(`serve running at ${PORT}`);
});
