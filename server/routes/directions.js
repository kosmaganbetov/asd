const multer = require("multer");
const express = require("express");
const path = require("path");
const {nanoid} = require("nanoid");
const router = express.Router();
const config = require("../config");
const Direction = require("../models/Direction");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.get("/", async (req, res) => {
  try {
    const directions = await Direction.find();
    res.send(directions);
  } catch(e) {
    res.sendStatus(502)
  }
});

router.get("/:id", async (req, res) => {
  try {
    const directions = await Direction.findById(req.params.id)
    res.send(directions);
  } catch (e) {
    res.sendStatus(404);
  }
});

router.post("/", upload.single("image"), async (req,res) => {
  const directions = Direction(req.body);

  if (req.file) {
    directions.image = req.file.filename;
  }

  if (directions.name.trim() !== "") {
    try {
      await directions.save();
      res.send(directions);
    } catch(e) {
      console.log(e);
      res.status(400).send({e});
    }
  }
});


module.exports = router;