const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TourTransportSchema = new Schema({
  transport: {
    type: String,
    required: [true, "Название обязательно"]
  },
  icon: String
});

const TourTransport = mongoose.model("TourTransport", TourTransportSchema);

module.exports = TourTransport;