const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

//* All database functions are asynchronous */

//Get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};

//Get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  //*We added this check because mongoose will throw an error that doesn't send a respond back to the client. */
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "No workout found." });
  }
  res.status(200).json(workout);
};

//Create a new workout
const createWorkout = async (req, res) => {
  const { name, reps, load } = req.body;

  try {
    //add doc to db
    const workout = await Workout.create({ name, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  //The function returns the document as it was before the update was applied.

  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });

  res.status(200).json(workout);
};

//Delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const deletedWorkout = await Workout.findByIdAndDelete(id);

  res.status(200).json(deletedWorkout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
