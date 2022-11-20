const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://ignacioambia:${process.env.MONGODB_PWD}@cluster0.2if8z0y.mongodb.net/dev?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected successfully to DB");
  })
  .catch((e) => {
    console.log("could not connect", e);
  });

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
const maps = require("./routes/maps");
const services = require("./routes/services");

app.use("/maps/*", maps);
app.use("/services", services);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("alva cleaning running on port", port);
});
