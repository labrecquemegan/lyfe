const { Schema, Types } = require('mongoose');

console.log('inside Exercise.js');

const exerciseSchema = new Schema(
	{
		date: {
			type: Date,
			default: Date.now(),
		},

		duration: {
			type: Number,
			required: true,
		},

		intensity: {
			type: String,
			required: true,
		},

		met_rating: {
			type: Number,
			required: true,
		},

		notes: {
			type: String,
			minlength: 1,
			maxlength: 200,
		},
	},
	{
		toJSON: {
			getters: true,
		},
		timestamps: true,
	}
);

module.exports = exerciseSchema;
