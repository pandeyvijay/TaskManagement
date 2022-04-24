const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  projectId: String,
  memberIds: [String],
});

module.exports = mongoose.model("Team", teamSchema);
