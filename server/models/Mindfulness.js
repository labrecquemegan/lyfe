const { Schema, Types } = require('mongoose');

console.log('inside Mindfulness.js');

const mindfulnessSchema = new Schema(
	{
		date: {
			type: Date,
			default: Date.now(),
		},

		duration: {
			type: Number,
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
	}
);

module.exports = mindfulnessSchema;
