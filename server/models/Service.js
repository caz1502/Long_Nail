const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },
});

const Service = model("Service", serviceSchema);

module.exports = Service;
