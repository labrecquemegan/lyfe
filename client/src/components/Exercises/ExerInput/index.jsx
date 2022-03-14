import React from "react";
import "./exerciseinput.scss";

export default function ExerciseInput() {
  return (
    <section className="exercise-input-container">
      <div className="rows">
        <h2>Exercise Log</h2>
        <p>Log your exercise and get customized exercises!</p>
      </div>
      <div className="second-row">
      <div className="time">
        <h3>Time</h3>
        <input type="text" className="time-counter" />
      </div>
      <div className="intensity">
        <h3>Intensity</h3>
        <button>Light</button>
        <button>Medium</button>
        <button>High</button>
      </div>
      <div className="notes">
        <h3>Notes</h3>
        <input type="text" className="notes-input" />
      </div>
      <div className="add-button">
        <button>Add Info</button>
      </div>
      </div>
    </section>
  );
}
