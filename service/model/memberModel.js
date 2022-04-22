const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  team: [Number],
  emailId: String,
  password: String,
});

module.exports = mongoose.model("Member", memberSchema);
