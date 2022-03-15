import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EXERCISE } from "../../../utils/mutations";
import "./yogabars.scss";

export default function Yogabars() {
  // declare state of formData
  const [formData, setFormData] = useState({
    duration: "0",
    intensity: "",
    metRating: "0",
    notes: "Type your note here...",
  });

  // bring in addExercise mutation
  const [addExercise, { error }] = useMutation(ADD_EXERCISE);

  // handle submitting the form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addExercise({
        variables: {
          duration: parseInt(formData.duration),
          intensity: formData.intensity,
          metRating: parseInt(formData.metRating),
          notes: formData.notes,
        },
      });
    } catch (err) {
      console.error(err);
    }

    // reset form data
    setFormData({
      duration: "0",
      intensity: "",
      metRating: "0",
      notes: "Type your note here...",
    });

    // reset form values
    document.getElementById("submit-exercise-form").reset();
  };

  // handle changes in the form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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

              <div className="duration">
                <h2>Duration</h2>
                <input
                  type="number"
                  name="duration"
                  id="duration"
                  className="time-counter"
                  placeholder={formData.duration}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
