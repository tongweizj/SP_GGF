const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fundSchema = new Schema({
  name: String,
  code: String,
  type: String
});

module.exports = mongoose.model("fund", fundSchema);