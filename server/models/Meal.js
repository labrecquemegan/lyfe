const { Schema, model } = require('mongoose');

console.log('inside Meal.js');

const mealSchema = new Schema({
	date: {
		type: Date,
		default: Date.now(),
	},

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
});

module.exports = mealSchema;
