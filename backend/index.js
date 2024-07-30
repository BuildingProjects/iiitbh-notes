import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Roshan and Ankur!");
});

app.listen(PORT, () => {
  console.log(`Server is Liesting on ${PORT}`);
});
