const multer = require("multer");
const express = require("express");
const path = require("path");
const {nanoid} = require("nanoid");
const router = express.Router();
const config = require("../config");
const Tourmate = require("../models/Tourmate");

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
    const tourmates = await Tourmate.find();
    res.send(tourmates);
  } catch(e) {
    res.sendStatus(502)
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tourmate = await Tourmate.findById(req.params.id)
    res.send(tourmate);
  } catch (e) {
    res.sendStatus(404);
  }
});

router.post("/", upload.single("image"), async (req,res) => {
  const tourmate = Tourmate(req.body);

  if (req.file) {
    tourmate.image = req.file.filename;
  }

  if (tourmate.name.trim() !== "" || tourmate.surname.trim() !== "") {
    try {
      await tourmate.save();
      res.send(tourmate);
    } catch(e) {
      console.log(e);
      res.status(400).send({e});
    }
  }
});

module.exports = router;