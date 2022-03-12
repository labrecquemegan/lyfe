import React from "react";
import "./style.scss";

export default function Stats() {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>Your Exercise Statistics</h2>
          <div className="btn-row">
            <div className="stats">
              <div className="stat-boxes">
                <span>3</span>
                <div className="days">
                  <h3>Days Total</h3>
                </div>
              </div>
              <div className="stat-boxes">
                <span>4</span>
                <div className="streak">
                  <h3>Your Highest Streak</h3>
                </div>
              </div>
              <div className="stat-boxes">
                <span>5</span>
                <div className="total">
                  <h3>Days Total</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
