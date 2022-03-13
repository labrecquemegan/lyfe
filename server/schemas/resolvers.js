const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { Exercise } = require('../models/Exercise');
const { Mindfulness } = require('../models/Mindfulness');
const { Meal } = require('../models/Meal');
const { Water } = require('../models/Water');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		// Get all users
		users: async () => {
			return User.find({});
		},

		// Get single user
		user: async (parent, { userId }) => {
			const user = User.findOne({ _id: userId });
			return user;
		},

		// Get logged in user
		me: async (parent, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id });
			}
			throw new AuthenticationError('You need to be logged in!');
		},
	},

	Mutation: {
		// Add new user
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);
			return { token, user };
		},
		// update user
		updateUser: async (parent, args, context) => {
			if (context.user) {
				return await User.findByIdAndUpdate(context.user._id, args, {
					new: true,
				});
			}

			throw new AuthenticationError('Not logged in');
		},
		// Remove user
		removeUser: async (parent, { userId }) => {
			return User.findOneAndDelete({ _id: userId });
		},
		// Login
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError('No user with this email found!');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect password!');
			}

			const token = signToken(user);
			return { token, user };
		},
		// Add exercise to exercises
		addExercise: async (
			parent,
			{ duration, intensity, met_rating, notes },
			context
		) => {
			if (context.user) {
				const exercise = await Exercise.create({
					duration,
					intensity,
					met_rating,
					notes,
				});

				await User.findByIdAndUpdate(context.user._id, {
					$push: { exercises: exercise },
				});

				return exercise;
			}

			throw new AuthenticationError('Not logged in');
		},
		// Add session to mindful_sessiosn
		addMindfulness: async (parent, { duration, notes }, context) => {
			if (context.user) {
				const session = await Mindfulness.create({ duration, notes });

				await User.findByIdAndUpdate(context.user._id, {
					$push: { mindful_sessions: session },
				});

				return session;
			}

			throw new AuthenticationError('Not logged in');
		},
		// Add meal to meals
		addMeal: async (
			parent,
			{ calories, protein, carbohydrates, fat },
			context
		) => {
			if (context.user) {
				const meal = await Meal.create({
					calories,
					protein,
					carbohydrates,
					fat,
				});

				await User.findByIdAndUpdate(context.user._id, {
					$push: { meals: meal },
				});

				return meal;
			}

			throw new AuthenticationError('Not logged in');
		},
		// Add water to water_intake
		addWater: async (parent, { amount }, context) => {
			if (context.user) {
				const water = await Water.create({
					amount,
				});

				await User.findByIdAndUpdate(context.user._id, {
					$push: { water_intake: water },
				});

				return water;
			}

			throw new AuthenticationError('Not logged in');
		},
		// Update exercise in exercises
		updateExercise: async (parent, args, context) => {},
		// Update session in mindul_sessions
		updateMindfulness: async (parent, args, context) => {},
		// Update meal in meals
		updateMeal: async (parent, args, context) => {},
		// Update water in water_intake
		updateWater: async (parent, args, context) => {},
		// Delete exercise from exercises
		deleteExercise: async (parent, { exerciseId }, context) => {
			if (context.user) {
				const user = await User.findByIdAndUpdate(
					context.user._id,
					{
						$pull: { exercises: { _id: exerciseId } },
					},
					{ new: true }
				);

				return user;
			}

			throw new AuthenticationError('Not logged in');
		},
		// Delete session from mindful_sessions
		deleteMindfulness: async (parent, { mindfulnessId }, context) => {
			if (context.user) {
				const user = await User.findByIdAndUpdate(
					context.user._id,
					{
						$pull: { mindful_sessions: { _id: mindfulnessId } },
					},
					{ new: true }
				);

				return user;
			}

			throw new AuthenticationError('Not logged in');
		},
		// Delete water from water_intake
		deleteWater: async (parent, { waterId }, context) => {
			if (context.user) {
				const user = await User.findByIdAndUpdate(
					context.user._id,
					{
						$pull: { water_intake: { _id: waterId } },
					},
					{ new: true }
				);

				return user;
			}

			throw new AuthenticationError('Not logged in');
		},
		// Delete meal from meals
		deleteMeal: async (parent, { mealId }, context) => {
			if (context.user) {
				const user = await User.findByIdAndUpdate(
					context.user._id,
					{
						$pull: { meals: { _id: mealId } },
					},
					{ new: true }
				);

				return user;
			}

			throw new AuthenticationError('Not logged in');
		},
	},
};

module.exports = resolvers;
