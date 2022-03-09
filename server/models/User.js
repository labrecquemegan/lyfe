const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schemas here

const userSchema = new Schema(
	{
		first_name: {},
		last_name: {},
		username: {},
		email: {},
		password: {},
		weight: {},
		height: {},
		age: {},
		gender: {},
		measurement_system: {},
		// uses exerciseSchema
		exercises: [exerciseSchema],
		exercise_goal: {},
		// uses mindfulSchema
		mindful_sessions: [mindfulSchema],
		mindful_goal: {},
		// uses mindfulSchema
		water_intake: [waterSchema],
		water_goal: {},
		// uses mealSchema
		meals: [mealSchema],
		calorie_goal: {},
	},
	{
		// for use with virtuals
		toJSON: {
			virtuals: true,
		},
	}
);
