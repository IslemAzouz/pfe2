const Hum = require("../models/hum.model.js");

const getHums = async (req, res) => {
  try {
    const hums = await Hum.find({})
      .sort({ createdAt: -1 }) 
      .limit(20)
      .lean(); 
    res.status(200).json(hums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const createHum = async (req, res) => {
  try {
    const hum = await Hum.create(req.body);
    res.status(200).json(hum);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  const deleteHum = async (req, res) => {
    try {
      const { id } = req.params;
  
      const hum = await Hum.findByIdAndDelete(id);
  
      if (!hum) {
        return res.status(404).json({ message: "Hum not found" });
      }
  
      res.status(200).json({ message: "Hum deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  module.exports = {
    getHums,
    createHum,
    deleteHum,
  };
