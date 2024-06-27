const express = require("express");
const Temp = require("../models/temp.model.js");
const router = express.Router();
const {getTemps, createTemp, deleteTemp} = require('../controllers/temp.controller.js');


router.get('/', getTemps);

router.post("/", createTemp);

router.delete("/:id", deleteTemp);



module.exports = router;