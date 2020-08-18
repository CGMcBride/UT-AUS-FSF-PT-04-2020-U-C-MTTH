const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  passweord: {
    type: String,
    trim: true, // find out how
    required: true,
    validate: [({ length }) => length >= 6, "Long password required."]

  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userCreated: {
    type: Date,
    required: true,
    default: Date.now
  }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
