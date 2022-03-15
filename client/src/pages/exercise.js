import React from "react";
import Stats from '../components/Exercises/Stats'
import Workouts from '../components/Exercises/Workouts'
import ExerciseInput from '../components/Exercises/ExerInput'

const Exercise = () => {
  return (
    <>
    <div className='page'>
      <div className='container'>
        <div>
          <Stats />
          <Workouts />
          <ExerciseInput />
        </div>
      </div>
    </div>
    </>
  );
};

export default Exercise;