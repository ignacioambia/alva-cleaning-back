const express = require("express");
const axios = require("axios");
const { rmSync } = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
  axios
    .get(
      `https://maps.googleapis.com${req.originalUrl}&key=${process.env.GOOGLE_KEY}`
    )
    .then(({ data }) => {
      console.log("res is: ", data);
      res.send(response);
    })
    .catch((e) => {
      res.status(200).send(e.message);
    });
});

module.exports = router;
