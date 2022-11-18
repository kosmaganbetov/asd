const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TourSchema = new Schema({
  title: {
    type: String,
    required: [true, "Название обязательно"]
  },
  tourmateID: {
    type: Schema.Types.ObjectId,
    ref: "Tourmate",
    required: [true,"Введите ID тура"]
  },
  price: {
    type: Number,
    required: [true, "Введите цену"]
  },
  description: {
    type: String,
    maxLength: 255
  },
  image: String
});

const Tour = mongoose.model("Tour", TourSchema);

module.exports = Tour;