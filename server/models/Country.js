const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  country: {
    type: String,
    required: [true, "Название обязательно"]
  }
});

const Country = mongoose.model("Country", CountrySchema);

module.exports = Country;