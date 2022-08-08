import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

import { useAutoAnimate } from "@formkit/auto-animate/react";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import NoWorkouts from "../components/NoWorkouts";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    const fetchWorkouts = async () => {
      //! Make sure that every requests points to the correct endpoints in development. */
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch, workouts]);

  return (
    <div className="home">
      {workouts && workouts.length === 0 && <NoWorkouts />}

      {workouts && workouts.length > 0 && (
        <ul className="workouts" ref={animationParent}>
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </ul>
      )}
      <WorkoutForm />
    </div>
  );
};

export default Home;
