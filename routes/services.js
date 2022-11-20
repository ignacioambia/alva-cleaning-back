const express = require("express");
const router = express.Router();

const Service = require("../schemas/ServiceSchema");

router.get("/", async (req, res) => {
  const allServices = await Service.find();
  res.send(allServices);
});

router.post("/", async (req, res) => {
  const service = await new Service(req.body).save();
  res.send(service);
});

module.exports = router;
