const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  headline: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
  location: { type: String, required: true },
  source: { type: String, required: true },
});

module.exports = mongoose.model("News", NewsSchema);
