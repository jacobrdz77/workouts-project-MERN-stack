import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      //The fetch to the endpoint only works for development.
      //! Make sure that every requests points to the correct endpoints in development. */
      const response = await fetch("/api/workouts");
      const arrayOfWorkouts = await response.json();

      if (response.ok) {
        setWorkouts(arrayOfWorkouts);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
