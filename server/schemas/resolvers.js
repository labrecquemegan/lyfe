const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		// Get all users
		users: async () => {
			return User.find({});
		},

		// Get single user
		user: async (parent, { userId }) => {
			return User.findOne({ _id: userId });
		},

		// Get logged in user
		me: async (parent, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id });
			}
			throw new AuthenticationError('You need to be logged in!');
		},

		// weekly_water: async (parent, args, context) => {
		//     let user = User.findOne(
		//         {_id},
		//         {$inc: {[`waterSchema${daily_water}`]: daily_water}},
		//         {new: true},
		//     )
		// },
	},

	Mutation: {
		// Add new user
		addUser: async (parent, args) => {
			const user = await User.create(args);
			// const token = signToken(user);
			// return { token, user };
			return { user };
		},
	},
};

module.exports = resolvers;
