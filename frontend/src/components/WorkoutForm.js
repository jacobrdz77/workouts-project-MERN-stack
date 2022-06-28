import { useState } from "react";

const WorkoutForm = () => {
  const [name, setName] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const workout = {
      name,
      load,
      reps,
    };

    const response = await fetch("/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setName("");
      setReps("");
      setLoad("");
      setError(null);
      console.log("Created new workout", json);
    }
  };

  return (
    <div className="create">
      <form action="" onSubmit={submitHandler}>
        <h3>Add a New Workout</h3>
        <label htmlFor="name">Exercise name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="load">Load (in lbs): </label>
        <input
          type="number"
          id="load"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />
        <label htmlFor="reps">Reps: </label>
        <input
          type="number"
          id="reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <button type="submit">Create Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default WorkoutForm;
