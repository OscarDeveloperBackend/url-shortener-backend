const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortcode: { type: String, required: true, unique: true },
  url_base: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
});
const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
