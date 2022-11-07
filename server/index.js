const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = 8000;

app.use(cors());
app.use(express.json());

const run = async () => {
  await mongoose.connect("mongodb://localhost/travella", {useNewUrlParser: true});
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