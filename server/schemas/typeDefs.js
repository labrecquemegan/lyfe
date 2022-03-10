const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		first_name: String
		last_name: String
		username: String
		email: String
		password: String
	}

	type Query {
		users: [User]!
		user(userId: ID!): User
	}

	type Mutation {
		addUser(
			first_name: String!
			last_name: String!
			username: String!
			email: String!
			password: String!
		): User
	}
`;

module.exports = typeDefs;

// ! From User
// weight: Int
// height: Int
// age: Int
// gender: String
// measurement_system: String
// exercises: [Exercise]
// exercise_goal: Int
// mindfulness_sessions: [Mindfulness]
// mindful_goal: Int
// water_intake: [Water]
// water_goal: Int
// meals: [Meal]
// calorie_goal: Int

// type Exercise {
//   _id: ID
//   date: String
//   duration: Int
//   internsity: String
//   met_rating: Int
//   notes: String
// }

// type Meal {
//   _id: ID
//   date: String
//   calories: Int
//   protein: Int
//   carbohydrates: Int
//   fat: Int
// }

// type Mindfulness {
//   _id: ID
//   date: String
//   duration: Int
//   notes: String
// }

// type Water {
//   _id: ID
//   date: String
//   amount: Int
// }
