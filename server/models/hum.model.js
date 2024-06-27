const mongoose = require("mongoose");

const HumiditySchema = mongoose.Schema(
  {
    value: {
      type: Number,
      required: [true, "Please enter Humidity value"],
    },
  },

  {
    timestamps: true,
    collection: 'Humidity'
  }
  
);



const Humidity = mongoose.model("Humidity", HumiditySchema, 'Humidity');

module.exports = Humidity;