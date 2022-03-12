import React from "react";
import "./workout.scss";

export default function Workouts() {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>Workouts</h2>
            <div class="skills" id="skills" data-scroll-section>
              <div>
                <h1 data-scroll>Skills</h1>
                <div className="skills-tree" data-scroll>
                  <div className="skill">
                    <div className="skill-title">
                      <h2>Javascript</h2>
                      <p>Frontend Development and Single-Page Apps</p>
                    </div>
                  </div>
                  <div className="skill">
                    <div className="skill-title">
                      <h2>Tools</h2>
                      <p>Design Systems and Smart Interfaces</p>
                    </div>
                  </div>
                  <div className="skill">
                    <div className="skill-title">
                      <h2>Backend</h2>
                      <p>Content Management Systems</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
