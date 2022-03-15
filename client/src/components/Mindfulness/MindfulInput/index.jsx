import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_MINDFULNESS } from "../../../utils/mutations";
import './mindfulinput.scss';


const MindfulnessInput = () => {

    const [formData, setFormData] = useState({
		duration: '0',
	});

    	// bring in addMindfulness mutation
	const [addMindfulness, { error }] = useMutation(ADD_MINDFULNESS);

    // handles submitting the form
    const handleFormSubmit = async (event) => {
		event.preventDefault();


		try {
			await addMindfulness({
				variables: {
					duration: parseInt(formData.duration),
				},
			});
		} catch (err) {
			console.error(err);
		}

		// reset form data
		setFormData({
			duration: '0',
		});

		// reset form values
		document.getElementById('submit-mindful-form').reset();
	};

    	// handle changes in the form
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<section className="mindful-input-container">
			<div className="rows">
				<h2>Mindfulness Log</h2>
				<p>Log your mindful activities!</p>
			</div>
			<div className="second-row">
				<form id="submit-exercise-form" onSubmit={handleFormSubmit}>
					<div className="time">
						<h3>Time</h3>
						<input
							type="number"
							name="duration"
							id="duration"
							className="time-counter"
							placeholder={formData.duration}
							onChange={handleInputChange}
						/>
					</div>
					<div className="add-button">
						<button type="submit">Add Info</button>
					</div>
					{error ? (
						<div>
							<p className="error-text">
								The provided credentials are incorrect
							</p>
						</div>
					) : null}
				</form>
			</div>
		</section>
	);
};

export default MindfulnessInput;
