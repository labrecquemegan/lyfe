const { Schema, model } = require('mongoose');

const mealSchema = new Schema({
	date: {
		type: Date,
		default: Date.now,
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
