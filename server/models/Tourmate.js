const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TourmateSchema = new Schema({
  name: {
    type: String,
    required: [true, "Имя обязательна"]
  },
  surname: {
    type: String,
    required: [true, "Фамилия обязательна"]
  },
  description: {
    type: String,
    maxLength: 50
  },
  text: {
    type: String,
    maxLength: 250
  },
  location: {
    type: String,
    maxLength: 100
  },
  languages: {
    type: [String],
    required: true
  },
  verificate: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    required: true
  },
  image: String
});

const Tourmate = mongoose.model("Tourmate", TourmateSchema);

module.exports = Tourmate;