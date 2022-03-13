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
		exercise_stats: ExerciseStats
		mindfulness_stats: MindfulnessStats
		water_stats: WaterStats
		nutrition_stats: NutritionStats
	}

	type Exercise {
		_id: ID
		duration: Int
		intensity: String
		met_rating: Int
		notes: String
	}

	type Mindfulness {
		_id: ID
		duration: Int
		notes: String
	}

	type Water {
		_id: ID
		amount: Int
	}

	type Meal {
		_id: ID
		calories: Int
		protein: Int
		carbohydrates: Int
		fat: Int
	}

	type ExerciseStats {
		total_exercise_duration: Int
		todays_exercise_duration: Int
	}

	type MindfulnessStats {
		total_mindful_duration: Int
		todays_mindful_duration: Int
	}

	type WaterStats {
		total_water_intake: Int
		todays_water_intake: Int
	}

	type NutritionStats {
		total_calories: Int
		todays_calories: Int
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

		removeUser(userId: ID!): User

		updateUser(
			email: String!
			password: String!
			weight: Int
			height: Int
			age: Int
			gender: String
			exercise_goal: Int
			mindful_goal: Int
			water_goal: Int
			calorie_goal: Int
		): User

		login(email: String!, password: String!): Auth

		addExercise(
			duration: Int!
			intensity: String!
			met_rating: Int!
			notes: String!
		): Exercise

		addMindfulness(duration: Int!, notes: String!): Mindfulness

		addMeal(
			calories: Int!
			protein: Int
			carbohydrates: Int
			fat: Int
		): Meal

		addWater(amount: Int!): Water

		# updateExercise
		updateExercise(
			exerciseId: ID!
			duration: Int
			intensity: String
			met_rating: Int
			notes: String
		): User

		# updateMindfulness
		updateMindfulness(
			mindfulnessId: ID!
			duration: Int
			notes: String
		): User

		# updateMeal
		updateMeal(
			mealId: ID!
			calories: Int
			protein: Int
			carbohydrates: Int
			fat: Int
		): User

		# updateWater
		updateWater(waterId: ID!, amount: Int): User

		deleteExercise(exerciseId: ID!): User

		deleteMindfulness(mindfulnessId: ID!): User

		deleteMeal(mealId: ID!): User

		deleteWater(waterId: ID!): User
	}
`;

module.exports = typeDefs;
