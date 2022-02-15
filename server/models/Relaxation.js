const { Schema, model } = require("mongoose");

const relaxationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Relaxation = model("Relaxation", relaxationSchema);

module.exports = Relaxation;
