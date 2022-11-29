const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DirectionSchema = new Schema({
  name: {
    type: String,
    required: [true, "Имя обязательна"]
  },
  description: {
    type: String,
    maxLength: 50
  },
  image: String
});

const Direction = mongoose.model("Direction", DirectionSchema);

module.exports = Direction;