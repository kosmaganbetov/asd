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
    required: [true,"Введите ID турмейта"]
  },
  price: {
    type: Number,
    required: [true, "Введите цену"]
  },
  description: {
    type: String,
    maxLength: 255
  },
  image: String,
  cityID: {
    type: Schema.Types.ObjectId,
    ref: "City",
    required: [true,"Введите ID города"]
  },
  countryID: {
    type: Schema.Types.ObjectId,
    ref: "Country",
    required: [true,"Введите ID страны"]
  },
  tourType: {
    type: Schema.Types.ObjectId,
    ref: "TourType",
    required: [true,"Введите ID типа"]
  },
  tourTransport: {
    type: Schema.Types.ObjectId,
    ref: "TourTransport",
    required: [true,"Введите ID транспорта"]
  },
  plan: {
    type: [{
      title: String,
      description: String
    }],
    required: true
	}, 
  program: {
    type: {
      included: [String],
      notincluded: [String]
    },
    required: true
  },
  categories: {
    type: [Schema.Types.ObjectId],
    required: true
  },
  duration: {
    type: String,
    required: true
  }
});

const Tour = mongoose.model("Tour", TourSchema);

module.exports = Tour;