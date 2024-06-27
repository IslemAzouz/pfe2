const Temp = require("../models/temp.model");

const getTemps = async (req, res) => {
  try {
    const temps = await Temp.find({}).lean(); 
    res.status(200).json(temps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createTemp = async (req, res) => {
  try {
    const temp = await Temp.create(req.body);
    res.status(200).json(temp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  const deleteTemp = async (req, res) => {
    try {
      const { id } = req.params;
  
      const temp = await Temp.findByIdAndDelete(id);
  
      if (!temp) {
        return res.status(404).json({ message: "Temp not found" });
      }
  
      res.status(200).json({ message: "Temp deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  module.exports = {
    getTemps,
    createTemp,
    deleteTemp,
  };
