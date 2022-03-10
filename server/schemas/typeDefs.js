const { gql } = require('apollo-server-express');

const typeDefs = gql`
	# Types
	type User {
		_id: ID
		first_name: String
		last_name: String
		username: String
		email: String
		password: String
		weight: Int
		height: Int
		age: Int
		gender: String
		exercises: [Exercise]
		exercise_goal: Int
		mindful_sessions: [Mindfulness]
		mindful_goal: Int
		water_intake: [Water]
		water_goal: Int
		meals: [Meal]
		calorie_goal: Int
	}

	type Exercise {
		exerciseId: ID
		date: String
		duration: Int
		intensity: String
		met_rating: Int
		notes: String
	}

	type Mindfulness {
		mindfulnessId: ID
		date: String
		duration: Int
		notes: String
	}

	type Water {
		waterId: ID
		date: String
		amount: Int
	}

	type Meal {
		mealId: ID
		date: String
		calories: Int
		protein: Int
		carbohydrates: Int
		fat: Int
	}

	type Auth {
		token: ID!
		user: User
	}

	# Queries
	type Query {
		users: [User]!
		user(userId: ID!): User
		me: User
	}

	# Mutations
	type Mutation {
		addUser(
			first_name: String!
			last_name: String!
			username: String!
			email: String!
			password: String!
		): Auth
		login(email: String!, password: String!): Auth
		removeUser(userId: ID!): User
		# setExerciseGoal
		# setMindfulGoal
		# setWaterGoal
		# setCalorieGoal
	}
`;

module.exports = typeDefs;
