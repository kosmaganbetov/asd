const multer = require("multer");
const express = require("express");
const path = require("path");
const {nanoid} = require("nanoid");
const router = express.Router();
const config = require("../config");
const City = require("../models/City");

router.get("/", async (req, res) => {
  try {
    const cities = await City.find();
    res.send(cities);
  } catch(e) {
    res.sendStatus(502)
  }
});

router.get("/:id", async (req, res) => {
  try {
    const city = await City.findById(req.params.id)
    res.send(city);
  } catch (e) {
    res.sendStatus(404);
  }
});


module.exports = router;