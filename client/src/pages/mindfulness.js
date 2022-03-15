import React from "react";
import Calendar from "../components/Calendar/index";
import YogaBars from "../components/Mindfulness/YogaBars";
import MindfulnessInput from "../components/Mindfulness/MindfulInput/index";

const Mindfulness = () => {
  return (
    <>
      <div className="page">
        <div className="container">
          <div>
            <MindfulnessInput />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mindfulness;
