const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  Teams: [],
  devEndDate: Date,
  stEnddate: Date,
});

module.exports = mongoose.model("Project", projectSchema);
