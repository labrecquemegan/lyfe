const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Schemas
const exerciseSchema = require('./Exercise');
const mindfulnessSchema = require('./Mindfulness');
const waterSchema = require('./Water');
const mealSchema = require('./Meal');

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
			minlength: 5,
			match: [/.+@.+\..+/, 'Must use a valid email address'],
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
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
		exercise_goal: {
			type: Number,
			// default 30 minutes/day
			default: 30,
		},
		// uses mindfulSchema
		mindful_sessions: [mindfulnessSchema],
		mindful_goal: {
			type: Number,
			// default 15 minutes/day
			default: 15,
		},
		// uses mindfulSchema
		water_intake: [waterSchema],
		water_goal: {
			type: Number,
			// default 64 ounces of water/day
			default: 64,
		},
		// uses mealSchema
		meals: [mealSchema],
		calorie_goal: {
			type: Number,
			// default 2000 calories/day
			default: 2000,
		},
	},
	{
		// for use with virtuals
		toJSON: {
			virtuals: true,
		},
	}
);

// hash user password
userSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
