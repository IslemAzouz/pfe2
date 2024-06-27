
require('dotenv').config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const tempRoute = require("./routes/temp.route.js");
const humRoute = require("./routes/hum.route.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/temp", tempRoute);
app.use("/api/hum", humRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection failed:", error);
  });
