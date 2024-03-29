import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useState } from "react";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();


  const deleteHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    dispatch({ type: "DELETE_WORKOUT", payload: json });
  };

  return (
    <div className="workout-details">
      <li className="">
        <h4>{workout.name}</h4>
        <p>
          <strong>Load(lbs): </strong>
          {workout.load}
        </p>
        <p>
          <strong>Reps: </strong>
          {workout.reps}
        </p>
        <p className="date">{workout.createdAt.toLocaleString()}</p>
      </li>
      <div>
        <button onClick={deleteHandler} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default WorkoutDetails;
