const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/contactRoute");

const app = express();
dotenv.config();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors());
app.use(express.json());
app.use("/Contact", emailRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// const PORT = process.env.PORT;
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
