const express = require("express");
const { get } = require("mongoose");
const router = express.Router();

//All workouts
router.get("/", (req, res) => {
  res.json({ message: "All workouts" });
});

//Get a single workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single workout" });
});

//Create a new workout
router.post("/", (req, res) => {
  res.json({ message: "New workout" });
});

//Update a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update workout" });
});

//Delete a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete workout" });
});

router.get("/", (req, res) => {});

module.exports = router;
