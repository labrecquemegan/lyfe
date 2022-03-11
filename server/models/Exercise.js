const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema(
	{
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

const Exercise = model('Exercise', exerciseSchema);

module.exports = { Exercise, exerciseSchema };
