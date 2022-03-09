const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schemas here

const userSchema = new Schema(
	{
		first_name: {
			type: String,
			required: true,
		},
		last_name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+@.+\..+/, 'Must use a valid email address'],
		},
		password: {
			type: String,
			required: true,
			match: [
				/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
				'Password must contain at least one letter and one number',
			],
		},
		weight: Number,
		height: Number,
		age: Number,
		gender: String,
		measurement_system: String,
		// uses exerciseSchema
		exercises: [exerciseSchema],
		exercise_goal: Number,
		// uses mindfulSchema
		mindful_sessions: [mindfulSchema],
		mindful_goal: Number,
		// uses mindfulSchema
		water_intake: [waterSchema],
		water_goal: Number,
		// uses mealSchema
		meals: [mealSchema],
		calorie_goal: Number,
	},
	{
		// for use with virtuals
		toJSON: {
			virtuals: true,
		},
	}
);
