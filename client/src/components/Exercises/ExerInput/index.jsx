import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EXERCISE } from '../../../utils/mutations';
import './exerciseinput.scss';

const ExerciseInput = () => {
	// declare state of formData
	const [formData, setFormData] = useState({
		duration: '0',
		intensity: 'low',
		metRating: '0',
		notes: 'Type your note here...',
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
			// reload the page
			window.location.reload(false);
		} catch (err) {
			console.error(err);
		}

		// reset form data
		setFormData({
			duration: '0',
			intensity: 'low',
			metRating: '0',
			notes: 'Type your note here...',
		});

		// reset form values
		document.getElementById('submit-exercise-form').reset();
	};

	// handle changes in the form
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<section className="exercise-input-container">
			<div className="rows">
				<h2>Exercise Log</h2>
				<p>Log your exercise and get customized exercises!</p>
			</div>
			<div className="second-row">
				<form id="submit-exercise-form" onSubmit={handleFormSubmit}>
					<div className="time">
						<h3>Time</h3>
						<input
							type="number"
							name="duration"
							id="duration"
							min={0}
							max={720}
							className="time-counter"
							placeholder={formData.duration}
							onChange={handleInputChange}
						/>
					</div>
					<div className="intensity">
						<h3>Intensity</h3>

						<div className="radio-toolbar">
							<input
								type="radio"
								id="radioLight"
								name="intensity"
								value="low"
								onChange={handleInputChange}
								defaultChecked
							/>
							<label
								htmlFor="radioLight"
								className="intensity-button"
							>
								Low
							</label>

							<input
								type="radio"
								id="radioMedium"
								name="intensity"
								value="medium"
								onChange={handleInputChange}
							/>
							<label
								htmlFor="radioMedium"
								className="intensity-button"
							>
								Medium
							</label>

							<input
								type="radio"
								id="radioHigh"
								name="intensity"
								value="high"
								onChange={handleInputChange}
							/>
							<label
								htmlFor="radioHigh"
								className="intensity-button"
							>
								High
							</label>
						</div>
					</div>
					<div className="met">
						<h3>MET Rating</h3>
						<input
							type="number"
							name="metRating"
							className="met-rating"
							min={0}
							max={12}
							placeholder={formData.metRating}
							onChange={handleInputChange}
						/>
					</div>
					<div className="notes">
						<h3>Notes</h3>
						<textarea
							type="text"
							name="notes"
							className="notes-input"
							placeholder={formData.notes}
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

export default ExerciseInput;
