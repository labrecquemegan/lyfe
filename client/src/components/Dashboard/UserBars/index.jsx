import "./userbars.scss";
import { AiFillCheckCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function UserBars() {
  return (
    <section className="userinfo-container">
      <div className="row">
        <h2>
          Welcome Back,
          <span className="user-name"> Keenan Thompson</span>
        </h2>
        <div className="skills" id="skills" data-scroll-section>
          <div>
            <div className="skills-tree" data-scroll>
              <div className="skill">
                <div className="skill-title">
                  <h2>Exercise</h2>
                  <p>Day Streak</p>
                </div>
                <IconContext.Provider
                  value={{ color: "green", className: "global-class-name", size: '3.5rem' }}
                >
                  <div className="check">
                    <AiFillCheckCircle />
                  </div>
                </IconContext.Provider>
              </div>
              <div className="skill">
                <div className="skill-title">
                  <h2>Mindfulness</h2>
                  <p>Day Streak</p>
                </div>
              </div>
              <div className="skill">
                <div className="skill-title">
                  <h2>Water</h2>
                  <p>
                    Day Streak
                  </p>
                </div>
              </div>
              <div className="skill">
                <div className="skill-title">
                  <h2>Nutrition</h2>
                  <p>Day Streak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
