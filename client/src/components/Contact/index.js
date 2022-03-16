import React, { useState, useRef, useEffect } from 'react';
import "./contact.scss"
import {gsap, Power2} from 'gsap';
import {AiFillGithub} from 'react-icons/ai';
import { IconContext } from "react-icons";

const Contact = () => {

    const [name,setName] = useState("Alex Widener");
    const [job,setJob] = useState("Full Stack Developer");
    const [about,setAbout] = useState("Whatever you want honestly, but I will check for cheating!");

    const [name1,setName1] = useState("Alex Borges");
    const [job1,setJob1] = useState("Full Stack Developer");
    const [about1,setAbout1] = useState("Whatever you want honestly, but give me a min to get my coffee.");

    const [name2,setName2] = useState("Megan Labrecque");
    const [job2,setJob2] = useState("Full Stack Developer");
    const [about2,setAbout2] = useState("Whatever you want honestly, but I will not teach children!");

    const [name3,setName3] = useState("Javier Mariscal");
    const [job3,setJob3] = useState("Full Stack Developer");
    const [about3,setAbout3] = useState("I am a 20 year old developer who just finished the UCF Bootcamp! I love overcoming new challenges and always open to learn new things as well as, try them! I try to mix up profressionalism and joking around from time to time in order to laugh. All in all, just a fun guy who is ready to go out into the real world!");

    let UserAnim = useRef(null);
	console.log(UserAnim);
  
	useEffect(() => {
		console.log(UserAnim);
	  gsap.to(
		  UserAnim,
		  5,
		  {
			  opacity: 1,
			  y: 40,
			  ease: Power2.easeOut
		  }
	  )
	}, []);

	return (
    <div className="container">
      <div
        className="Everyone"
        ref={(container) => {
          UserAnim = container;
        }}
      >
        <div className="Card">
          <div className="upper-container">
            <div className="image-container">
              <img
                src="https://avatars.githubusercontent.com/u/70721378?v=4"
                alt="Alex Widener Profile Picture"
                height="100px"
                width="100px"
              />
            </div>
          </div>
          <div className="lower-container">
            <h3> {name}</h3>
            <h4> {job} </h4>
            <p> {about} </p>

            <IconContext.Provider
                    value={{
                      color: 'black',
                      className: "global-class-name",
                      size: "3.5rem",
                    }}
                  >
                      <a href='https://github.com/awidener3' target="_blank">
                      <AiFillGithub />
                      </a>
                  </IconContext.Provider>
          </div>
        </div>

        {/* Alex Borges */}
        <div className="Card">
          <div className="upper-container">
            <div className="image-container">
              <img
                src="https://avatars.githubusercontent.com/u/94647436?v=4"
                alt="Alex Borges Profile Picture"
                height="100px"
                width="100px"
              />
            </div>
          </div>
          <div className="lower-container">
            <h3> {name1}</h3>
            <h4> {job1} </h4>
            <p> {about1} </p>

            <IconContext.Provider
                    value={{
                      color: 'black',
                      className: "global-class-name",
                      size: "3.5rem",
                    }}
                  >
                      <a href='https://github.com/xndrbrgs' target="_blank">
                      <AiFillGithub />
                      </a>
                  </IconContext.Provider>
          </div>
        </div>

        {/* Megan Labrecque */}
        <div className="Card">
          <div className="upper-container">
            <div className="image-container">
              <img
                src="https://avatars.githubusercontent.com/u/91804768?v=4"
                alt="Megan Labrecque Profile Picture"
                height="100px"
                width="100px"
              />
            </div>
          </div>
          <div className="lower-container">
            <h3> {name2}</h3>
            <h4> {job2} </h4>
            <p> {about2} </p>

            <IconContext.Provider
                    value={{
                      color: 'black',
                      className: "global-class-name",
                      size: "3.5rem",
                    }}
                  >
                      <a href='https://github.com/labrecquemegan' target="_blank">
                      <AiFillGithub />
                      </a>
                  </IconContext.Provider>
          </div>
        </div>

        {/* Javier Mariscal */}
        <div className="Card">
          <div className="upper-container">
            <div className="image-container">
              <img
                src="https://avatars.githubusercontent.com/u/77296553?v=4"
                alt="Javier Mariscal Profile Picture"
                height="100px"
                width="100px"
              />
            </div>
          </div>
          <div className="lower-container">
            <h3> {name3}</h3>
            <h4> {job3} </h4>
            <p> {about3} </p>

            <IconContext.Provider
                    value={{
                      color: 'black',
                      className: "global-class-name",
                      size: "3.5rem",
                    }}
                  >
                      <a href='https://github.com/javier0607' target="_blank">
                      <AiFillGithub />
                      </a>
                  </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;