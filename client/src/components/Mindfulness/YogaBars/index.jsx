import React from "react";
import "./yogabars.scss";

export default function Yogabars() {
  return (
    <section className="yoga-container">
      <div className="row">
        <h2>Yoga Poses</h2>
        <div className="skills" id="skills" data-scroll-section>
          <div>
            <div className="skills-tree" data-scroll>
              <div className="skill">
                <div className="skill-title">
                  <h2>Beginner</h2>
                  <p>Beginner yoga poses to start your mindfull journey</p>
                </div>
              </div>
              <div className="skill">
                <div className="skill-title">
                  <h2>Intermediate</h2>
                  <p>Take your yoga up a notch with these intermediate poses</p>
                </div>
              </div>
              <div className="skill">
                <div className="skill-title">
                  <h2>Expert</h2>
                  <p>
                    Question your way of life and why your parents are
                    dissapointed in you
                  </p>
                </div>
              </div>
              <div className="skill">
                <div className="skill-title">
                  <h2>Recommended</h2>
                  <p>Poses recommended to your skill level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
