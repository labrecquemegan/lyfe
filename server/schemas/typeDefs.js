const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        first_name: String
        last_name: String
        username: String
        email: String
        password: String
        weight: Int
        height: Int
		age: Int
		gender: String
		measurement_system: String
        exercises: [Exercises]
        exercise_goal: Int
        mindfulness_sessions: [Mindfulness]
        mindful_goal: Int
        water_intake: [Water]
        water_goal: Int
        meals: [Meal]
        calorie_goal: Int
    }

    type Exercise {
        _id: ID
        date: Date
        duration: Int
        internsity: String
        met_rating: Int
        notes: String
    }

    type Meal {
        _id: ID
        date: Date
        calories: Int
        protein: Int
        carbohydrates: Int
        fat: Int

    }

    type Mindfulness {
        _id: ID
        date: Date
        duration: Int
        notes: String
    }

    type Water {
        _id: ID
        date: Date
        amount: Int
    }

    type Query {
        exercise: [Exercise]
        meal: [Meal]
        mindfulness: [Mindfulness]
        water: [Water]
    }
`;

module.exports = typeDefs;
