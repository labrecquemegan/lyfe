import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_WATER } from '../../../utils/mutations';
import './waterinput.scss';

const WaterInput = () => {
	// declare state of formData
	const [formData, setFormData] = useState({
		amount: '0',
	});

	// bring in addExercise mutation
	const [addWater, { error }] = useMutation(ADD_WATER);

	// handle submitting the form
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			await addWater({
				variables: {
					amount: parseInt(formData.amount),
				},
			});
		} catch (err) {
			console.error(err);
		}

		// reset form data
		setFormData({
			amount: '0',
		});

		// reset form values
		document.getElementById('submit-water-form').reset();
	};

	// handle changes in the form
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<section className="water-input-container">
			<div className="rows">
				<h2>Water Log</h2>
				<p>Log your water!</p>
			</div>
			<div className="second-row">
				<form id="submit-water-form" onSubmit={handleFormSubmit}>
					<div className="amount">
						<h3>Water Intake in Ounces</h3>

						<div className="radio-toolbar">
							<input
								type="radio"
								id="radioLight"
								name="amount"
								value="8"
								onChange={handleInputChange}
								defaultChecked
							/>
							<label htmlFor="radioLight" className="oz-button">
								8 oz
							</label>

							<input
								type="radio"
								id="radioMedium"
								name="amount"
								value="16"
								onChange={handleInputChange}
							/>
							<label htmlFor="radioMedium" className="oz-button">
								16 oz
							</label>

							<input
								type="radio"
								id="radioHigh"
								name="amount"
								value="20"
								onChange={handleInputChange}
							/>
							<label htmlFor="radioHigh" className="oz-button">
								20 oz
							</label>
						</div>
					</div>
					<div className="custom-amount">
						<h3>Custom Amount</h3>
						<input
							type="number"
							name="amount"
							id="amount"
							min={0}
							max={500}
							className="custom-amount"
							placeholder={formData.amount}
							onChange={handleInputChange}
						/>
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
					</div>
				</form>
			</div>
		</section>
	);
};

export default WaterInput;
