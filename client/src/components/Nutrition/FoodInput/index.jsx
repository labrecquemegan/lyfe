import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// * Write mutation for adding nutrition stats
import { ADD_MEAL } from '../../../utils/mutations';
import './foodinput.scss';

const FoodInput = () => {
	// declare state of formData
	const [formData, setFormData] = useState({
		// * Add in default states for formData
		calories: '',
		protein: '',
		carbohydrates: '',
		fat: '',
	});

	// bring in addMeal mutation
	// * Update mutation to use ADD_MEAL
	const [addMeal, { error }] = useMutation(ADD_MEAL);

	// handle submitting the form
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			// * Update promise to use addMeal() with the correct variables. Don't forget to parseInt() anything that's supposed to be a number!
			await addMeal({
				variables: {
					calories: parseInt(formData.calories),
					protein: parseInt(formData.protein),
					carbohydrates: parseInt(formData.carbohydrates),
					fat: parseInt(formData.fat),
				},
			});
		} catch (err) {
			console.error(err);
		}

		// reset form data
		// TODO: Update reset to match what is declared in formData
		setFormData({
			duration: '0',
			intensity: '',
			metRating: '0',
			notes: 'Type your note here...',
		});

		// reset form values
		// TODO: Update to grab nutrition form ID
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
				{/* // TODO: Update ID and change in getElementById above  */}
				<form id="submit-exercise-form" onSubmit={handleFormSubmit}>
					<div className="time">
						<h3>Calories</h3>
						{/* // TODO: Update name, id, className and placeHolder  */}
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
						{/* // TODO: Update name, className and placeholder -> Add ID  */}
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
						{/* // TODO: Update name, className and placeholder -> Add ID  */}
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
						{/* // TODO: Update name, className and placeholder -> Add ID  */}
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
							{/* // TODO: Add pointer to mouse */}
							<button className="left"> - </button>
							{/* // ? Might not need to be an input since there are increment and decrement buttons */}
							{/* // TODO: Update name, className and placeholder -> Add ID */}
							<input
								type="number"
								name="metRating"
								className="met-rating"
								placeholder={formData.metRating}
								onChange={handleInputChange}
							/>
							<button className="right"> + </button>
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
