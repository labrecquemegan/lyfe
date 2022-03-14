import React from "react";
import "./workout.scss";

export default function Workouts() {
  return (
    <section className="workouts-container">
        <div className="row">
          <h2>Workouts</h2>
            <div class="skills" id="skills" data-scroll-section>
              <div>
                <div className="skills-tree" data-scroll>
                  <div className="skill">
                    <div className="skill-title">
                      <h2>Beginner</h2>
                      <p>Beginner workouts to start your fitness journey</p>
                    </div>
                  </div>
                  <div className="skill">
                    <div className="skill-title">
                      <h2>Intermediate</h2>
                      <p>Take your fitness up a notch with these intermediate exercises</p>
                    </div>
                  </div>
                  <div className="skill">
                    <div className="skill-title">
                      <h2>Difficult</h2>
                      <p>Designed to make your life utterly miserable</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </section>
  );
}
