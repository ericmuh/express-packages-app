// name
// packages
// location
// email
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  package: [
    {
      type: Schema.Types.ObjectId,
      ref: "package",
    },
  ],
});

// creates a collection of users with a structure of userSchema
const User = mongoose.model("user", userSchema);
module.exports = User;
