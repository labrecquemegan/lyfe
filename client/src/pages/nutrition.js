import React from "react";
import Calendar from '../components/Calendar/index';

let style = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center'
}

const Nutrition = () => {
  return (
    <>
    <div className='page'>
      <div className='container' style={style}>
        <div>
        <Calendar  />
      
          <p>Meal Annimation goes here</p>
          </div>
      </div>
    </div>
    </>
  );
};

export default Nutrition;
