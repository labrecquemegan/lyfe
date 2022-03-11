import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
import "./landing-files/styles/style.scss";
import Header from "./landing-files/components/header";
import Navigation from "./landing-files/components/navigation";

import CaseStudies from "./landing-files/pages/caseStudies";
import Approach from "./landing-files/pages/approach";
import Services from "./landing-files/pages/services";
import About from "./landing-files/pages/about";
import Home from "./landing-files/pages/home";
import Contact from "./landing-files/pages/contact";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/exercises", name: "exercises", Component: CaseStudies },
  { path: "/mindfulness", name: "mindfulness", Component: Approach },
  { path: "/nutrition", name: "nutrition", Component: Services },
  { path: "/water", name: "water", Component: About },
  { path: "/contact", name: "contact", Component: Contact },
  // { path: "/signin", name: "signin", Component: SignIn },
  // { path: "/signup", name: "signup", Component: SignUp }
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function Landing() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <>
      <Header dimensions={dimensions} />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component dimensions={dimensions} />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default Landing;