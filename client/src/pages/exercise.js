import React from "react";
import Stats from '../components/Exercises/Stats'
import Workouts from '../components/Exercises/Workouts'
import Calendar from '../components/Calendar/index';

const Exercise = () => {
  return (
    <>
    <div className='page'>
      {/* <div className='container'> */}
        <div>
          <Calendar />
          <Stats />
          <Workouts />
        {/* </div> */}
      </div>
    </div>
    </>
  );
};

export default Exercise;
