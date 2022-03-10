const mongoose = require("mongoose");

const EtudeSchema = new mongoose.Schema({
  userId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

  product_id: {
    type: Number,
  },
});

const User = mongoose.model("Etudes", EtudeSchema);

module.exports = User;
