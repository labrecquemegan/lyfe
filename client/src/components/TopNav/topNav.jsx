import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import "./style.scss";
import logo from "../../images/png/logo-white.png";

export default function Header() {
  const navMenu = document.querySelector('.nav_menu');

  const classTog = (e) => {
      e.target.classList.toggle('active');
      navMenu.classList.toggle('active');
  };
  return (
    <header data-scroll-section>
      <img className="logo" src={logo} />
      <nav className="nav_links">
        <ul className="nav_menu">
          <li><a href='#' className="nav_items">Exercise</a></li>
          <li><a href='#' className="nav_items">Nutrition</a></li>
          <li><a href="#" className="nav_items">Mindfulness</a></li>
          <li><a href="#" className="nav_items">Water Intake</a></li>
          <a className="end-button" href="#"><button>Log In</button></a>
        </ul>
          {/* <button className="button-circle" onClick={classTog}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button> */}
      </nav>
    </header>
  );
}
