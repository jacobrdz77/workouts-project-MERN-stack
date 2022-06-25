const express = require("express");
const router = express.Router();

//Models
const Workout = require("../models/workoutModel");

//Controllers
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

//Get all workouts
router.get("/", getWorkouts);

//Get a single workout
router.get("/:id", getWorkout);

//Create a new workout
router.post("/", createWorkout);

//Update a workout
router.patch("/:id", updateWorkout);

//Delete a workout
router.delete("/:id", deleteWorkout);

router.get("/", (req, res) => {});

module.exports = router;
