const mongoose = require("mongoose");

let ArticleSchema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model("Article", ArticleSchema);
