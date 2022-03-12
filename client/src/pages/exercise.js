import React from "react";
import Stats from '../components/Exercises/Stats'
import Workouts from '../components/Exercises/Workouts'

const Exercise = () => {
  return (
    <div className='page'>
      <div className='container'>
          <Stats />
          <Workouts />
      </div>
    </div>
  );
};

export default Exercise;
