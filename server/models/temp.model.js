const mongoose = require("mongoose");

const TemperatureSchema = mongoose.Schema(
  {
    value: {
      type: Number,
      required: [true, "Please enter Temperature value"],
    },
  },

  {
    timestamps: true,
    collection: 'Temperature'
  }
  
);



const Temperature = mongoose.model("Temperature", TemperatureSchema, 'Temperature');

module.exports = Temperature;