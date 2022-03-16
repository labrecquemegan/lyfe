const { Schema, model } = require('mongoose');

const mealSchema = new Schema(
	{
		calories: {
			type: Number,
			required: true,
		},
		protein: {
			type: Number,
			required: true,
		},
		carbohydrates: {
			type: Number,
			required: true,
		},
		fat: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const Meal = model('Meal', mealSchema);

module.exports = { Meal, mealSchema };
