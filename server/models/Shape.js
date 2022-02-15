const { Schema, model } = require("mongoose");

const shapeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Shape = model("Shape", shapeSchema);

module.exports = Shape;
