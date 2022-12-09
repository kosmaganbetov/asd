const multer = require("multer");
const express = require("express");
const path = require("path");
const {nanoid} = require("nanoid");
const router = express.Router();
const config = require("../config");
const Tour = require("../models/Tour");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.get("/:id", async (req, res) => {
    try {
      const tours = await Tour.findById(req.params.id)
.populate("tourmateID");
      res.send(tours);
    } catch (e) {
      res.sendStatus(404);
    }
});

router.get("/", async (req, res) => {
    let query
    if(req.query.tourmate){
      query = {tourmate:req.query.torumate}
    }
    const tours = await Tour.find(query).populate("tourmateID cityID").sort({year:1});
    res.send(tours);
  });

router.post("/", upload.single("image"), async (req,res) => {
  const tours = Tour(req.body);

  if (req.file) {
    tours.image = req.file.filename;
  }
  try {
      await tours.save();
      res.send(tours);
    } catch(e) {
      console.log(e);
      res.status(400).send({e});
    }
});


module.exports = router;