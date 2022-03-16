import { gql } from '@apollo/client';

export const ADD_USER = gql`
	mutation addUser(
		$firstName: String!
		$lastName: String!
		$username: String!
		$email: String!
		$password: String!
	) {
		addUser(
			first_name: $firstName
			last_name: $lastName
			username: $username
			email: $email
			password: $password
		) {
			token
			user {
				_id
			}
		}
	}
`;

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;

export const ADD_EXERCISE = gql`
	mutation addExercise(
		$duration: Int!
		$intensity: String!
		$metRating: Int!
		$notes: String!
	) {
		addExercise(
			duration: $duration
			intensity: $intensity
			met_rating: $metRating
			notes: $notes
		) {
			_id
			duration
			intensity
			met_rating
			notes
		}
	}
`;

export const ADD_MEAL = gql`
	mutation addMeal(
		$calories: Int!
		$protein: Int
		$carbohydrates: Int
		$fat: Int
	) {
		addMeal(
			calories: $calories
			protein: $protein
			carbohydrates: $carbohydrates
			fat: $fat
		) {
			_id
			calories
			protein
			carbohydrates
			fat
		}
	}
`;

export const ADD_MINDFULNESS = gql`
	mutation addMindfulness($duration: Int!) {
		addMindfulness(duration: $duration) {
			_id
			duration
		}
	}
`;

export const ADD_WATER = gql`
	mutation addWater($amount: Int!) {
		addWater(amount: $amount) {
			_id
			amount
		}
	}
`;
