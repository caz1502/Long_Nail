const { Schema, model } = require("mongoose");

const acrylicSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

const Acrylic = model("Acrylics", acrylicSchema);

module.exports = Acrylic;
