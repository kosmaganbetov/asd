const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  city: {
    type: String,
    required: [true, "Название обязательно"]
  }
});

const City = mongoose.model("City", CitySchema);

module.exports = City;