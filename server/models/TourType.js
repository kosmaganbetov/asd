const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TourTypeSchema = new Schema({
  type: {
    type: String,
    required: [true, "Название обязательно"]
  },
  icon: String
});

const TourType = mongoose.model("TourType", TourTypeSchema);

module.exports = TourType;