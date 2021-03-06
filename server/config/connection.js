const mongoose = require("mongoose");

require ("dotenv").config()

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Long_Or_Short_Nail",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
