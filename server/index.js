const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const tourmates = require("./routes/tourmates");
const directions = require("./routes/directions")
const tours = require("./routes/tours")
const app = express();

const PORT = 8000;

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/tourmates", tourmates);
app.use("/directions",directions)
app.use("/tours",tours)
const run = async () => {
  await mongoose.connect("mongodb://localhost:27017/travella", {useNewUrlParser: true});
  console.log("Connected to mongo DB");

  app.listen(PORT, () => {
    console.log(
      `Server started at http://localhost:${PORT}`
    );
  });

  process.on("exit", () => {
    mongoose.disconnect();
  });
};

run().catch(console.log);