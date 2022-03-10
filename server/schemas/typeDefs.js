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
		total_mindfulness_duration: Int
		exercise_stats: ExerciseStats
	}

	type ExerciseStats {
		total_exercise_duration: Int
		todays_exercise_duration: Int
	}

	type Exercise {
		date: String
		duration: Int
		intensity: String
		met_rating: Int
		notes: String
	}

	type Mindfulness {
		date: String
		duration: Int
		notes: String
	}

	type Water {
		date: String
		amount: Int
	}

	type Meal {
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
		updateUser(
			first_name: String!
			last_name: String!
			username: String!
			email: String!
			password: String!
			exercise_goal: Int
		): User

		# setExerciseGoal
		# setMindfulGoal
		# setWaterGoal
		# setCalorieGoal
	}
`;

module.exports = typeDefs;
