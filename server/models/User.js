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
		timestamps: true,
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

userSchema.virtual('exercise_stats').get(function () {
	let stats = {};
	let userExercises = this.exercises;

	function getTotalExercise(exercises) {
		let total = 0;
		exercises.map((exercise) => (total += exercise.duration));
		return total;
	}

	function getTodaysExercise(exercises) {
		let today = new Date().toISOString().slice(0, 10);

		let todaysExercises = exercises.filter(
			(exercise) =>
				exercise.createdAt.toISOString().slice(0, 10) === today
		);

		let total = 0;
		todaysExercises.map((exercise) => (total += exercise.duration));
		return total;
	}

	stats.total_exercise_duration = getTotalExercise(userExercises);
	stats.todays_exercise_duration = getTodaysExercise(userExercises);

	return stats;
});

// Returns total duration based on exercises in array
// userSchema.virtual('total_exercise_duration').get(function (exercises) {
// 	let total = 0;
// 	this.exercises.map((exercise) => (total += exercise.duration));
// 	return total;
// });

// Returns total duration of mindfulness sessions in array
userSchema.virtual('total_mindfulness_duration').get(function () {
	// total
	let total = 0;
	this.mindful_sessions.map((session) => (total += session.duration));
	return total;
});

const User = model('User', userSchema);

module.exports = User;
