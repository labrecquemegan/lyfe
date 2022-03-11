const { Schema, model } = require('mongoose');

const mealSchema = new Schema(
	{
		calories: {
			type: Number,
			required: true,
		},
		protein: {
			type: Number,
		},
		carbohydrates: {
			type: Number,
		},
		fat: {
			type: Number,
		},
	},
	{ timestamps: true }
);

const Meal = model('Meal', mealSchema);

module.exports = { Meal, mealSchema };
