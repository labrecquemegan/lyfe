import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EXERCISE } from '../../../utils/mutations';
import './foodinput.scss';

const FoodInput = () => {
	// declare state of formData
	const [formData, setFormData] = useState({
		duration: '0',
		intensity: '',
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
		} catch (err) {
			console.error(err);
		}

		// reset form data
		setFormData({
			duration: '0',
			intensity: '',
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
		<section className="nutrition-input-container">
			<div className="rows">
				<h2>Meal Log</h2>
				<p>Log your meals and snacks!</p>
			</div>
			<div className="second-row">
				<form id="submit-exercise-form" onSubmit={handleFormSubmit}>
					<div className="time">
						<h3>Calories</h3>
						<input
							type="number"
							name="duration"
							id="duration"
							className="time-counter"
							placeholder={formData.duration}
							onChange={handleInputChange}
						/>
					</div>
                    <div className="macros-title">
                        <h3>Macros</h3>
                    </div>
					<div className="macros">
						<h3>Carbs</h3>
						<input
							type="number"
							name="metRating"
							className="met-rating"
							placeholder={formData.metRating}
							onChange={handleInputChange}
						/>
					</div>
					<div className="macros">
						<h3>Protein</h3>
						<input
							type="number"
							name="metRating"
							className="met-rating"
							placeholder={formData.metRating}
							onChange={handleInputChange}
						/>
					</div>
					<div className="macros">
						<h3>Fats</h3>
						<input
							type="number"
							name="metRating"
							className="met-rating"
							placeholder={formData.metRating}
							onChange={handleInputChange}
						/>
					</div>
                    <div className="servings">
					<div className="servings-div">
						<h3>Servings</h3>
                        <button className='left'> - </button>
						<input
							type="number"
							name="metRating"
							className="met-rating"
							placeholder={formData.metRating}
							onChange={handleInputChange}
						/>
                        <button className='right'> + </button>
					</div>
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

export default FoodInput;
