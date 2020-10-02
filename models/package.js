// name
// recepient
// description
// user

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  recepient: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Package = mongoose.model("package", packageSchema);

module.exports = Package;
