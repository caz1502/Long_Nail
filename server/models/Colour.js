const { Schema, model } = require("mongoose");

const colourSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Colour = model("Colour", colourSchema);

module.exports = Colour;
