const { User } = require('../models');
// const { signToken } = require('../utils/auth');
// const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
	Query: {
		users: async () => {
			return User.find({});
		},

		user: async (parent, args, context) => {
			let user = User.findOne({ _id: context.user._id });
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
		addUser: async (parent, args) => {
			const user = await User.create(args);
			// const user = await User.create({ username, email, password });
			// const token = signToken(user);
			// return { token, user };
			return { user };
		},
	},
};

module.exports = resolvers;
