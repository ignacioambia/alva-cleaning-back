const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const maps = require("./routes/maps");

app.use("/maps/*", maps);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Alva cleaning");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("alva cleaning running on port", port);
});
