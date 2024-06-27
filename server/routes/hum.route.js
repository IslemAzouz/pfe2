const express = require("express");
const Hum = require("../models/hum.model.js");
const router = express.Router();
const {getHums, createHum, deleteHum} = require('../controllers/hum.controller.js');


router.get('/', getHums);

router.post("/", createHum);

router.delete("/:id", deleteHum);



module.exports = router;