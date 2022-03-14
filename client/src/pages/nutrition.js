import React from "react";
// import Calendar from '../components/Calendar/index';
import CalStats from '../components/Nutrition/CalsStats'
import FoodInput from '../components/Nutrition/FoodInput'


const Nutrition = () => {
  return (
    <>
      <div className="page">
         <CalStats />
         <FoodInput />
      </div>
    </>
  );
};

export default Nutrition;
