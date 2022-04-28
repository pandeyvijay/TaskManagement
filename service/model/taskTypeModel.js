const { default: mongoose } = require("mongoose");
const mogoosse = require("mongoose");
const taskTypeSchema = new mongoose.Schema({
  name: String,
  color: String,
});

module.exports = mogoosse.model("TaskType", taskTypeSchema);
