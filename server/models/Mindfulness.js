const { Schema, Types } = require('mongoose');

const mindfulnessSchema = new Schema(
	{
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
		timestamps: true,
	}
);

const Mindfulness = model('Mindfulness', mindfulnessSchema);

module.exports = { Mindfulness, mindfulnessSchema };
