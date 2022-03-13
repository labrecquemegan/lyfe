import React from "react";
import Stats from '../components/Exercises/Stats'
import Workouts from '../components/Exercises/Workouts'

const Exercise = () => {
  return (
    <>
    <div className='page'>
      <div className='container'>
        <div>
          <Stats />
          <Workouts />
        </div>
      </div>
    </div>
    </>
  );
};

export default Exercise;
