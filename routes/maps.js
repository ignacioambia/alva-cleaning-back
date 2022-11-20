const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", (req, res) => {
  axios
    .get(
      `https://maps.googleapis.com${req.originalUrl}&key=${process.env.GOOGLE_KEY}`
    )
    .then(({ data }) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(200).send(e.message);
    });
});

module.exports = router;
