const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, requried: true },
    lng: { type: Number, requried: true },
  },
  creator: { type: String, requried: true },
});

module.exports = mongoose.model("Place", placeSchema);
