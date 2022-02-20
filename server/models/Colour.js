const { Schema, model } = require("mongoose");

const colourSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const Colour = model("Colour", colourSchema);

module.exports = Colour;
