const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { Exercise } = require('../models/Exercise');
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
		// update user (should allow user to set goals?)
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
		// Add to exercise array
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
	},
};

module.exports = resolvers;
