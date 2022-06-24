const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//The schema defines the structure of the documents that we save to that collection.
const workoutSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//This creates a new model which takes in a name (singular because this is going to pluralize this to create a collection automatically), and a schema that you created.
module.exports = mongoose.model("Workout", workoutSchema);

//We use that model to interact with the workouts collection because it automatically creates a collection for us based on its name.
