import React from "react";
import Stats from '../components/Exercises/Stats'
import Workouts from '../components/Exercises/Workouts'
import Calendar from '../components/Calendar/index';


let style = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center'
}

const Exercise = () => {
  return (
    <>
    <div className='page'>
      <div className='container' style={style}>
        <div>
          <Calendar />
          <Stats />
          <Workouts />
        </div>
      </div>
    </div>
    </>
  );
};

export default Exercise;
