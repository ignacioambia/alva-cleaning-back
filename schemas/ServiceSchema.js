const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  client_name: String,
  address: {
    name: String,
    lat: Number,
    lng: Number,
    place_id: String,
  },
  date: Date,
  phone: String,
  reference: String,
  created: { type: Date, default: Date.now },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
