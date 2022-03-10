import React, { useState } from 'react'
import { useEffect } from "react";
import { useRef } from "react";

import './App.scss'

// import Navbar from '../components/NavBar/nav'
import Landing from '../pages/LandingPage/Landing';

// import SideBar from '../components/SideBar'

import useLocoScroll from "../hooks/useLocoScroll";

const App = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


  useLocoScroll(!preloader);

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(0);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
      {preloader ? (
        <div className="loader-wrapper absolute">
        </div>
      ) : (
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
          ref={ref}
        >
          <Landing />
        </div>
      )}
    </>
  );
};
export default App;
