require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const workoutRoutes = require("./routes/workoutRoutes");

//Parse data
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/workouts", workoutRoutes);
//Connect to Database and listen to port
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Mongo DB");
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port: ${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log(err);
  });
