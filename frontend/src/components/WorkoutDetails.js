const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.name}</h4>
      <p>
        <strong>Load(lbs): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
