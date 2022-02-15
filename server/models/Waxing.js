const { Schema, model } = require("mongoose");

const waxingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

const Waxing = model("Waxing", waxingSchema);

module.exports = Waxing;
