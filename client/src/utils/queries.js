import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
	query users {
		users {
			_id
			first_name
			last_name
			username
			email
			password
			weight
			height
			age
			gender
			exercises {
				exerciseId
				date
				duration
				intensity
				met_rating
				notes
			}
			exercise_goal
			mindful_sessions {
				mindfulnessId
				date
				duration
				notes
			}
			mindful_goal
			water_intake {
				waterId
				date
				amount
			}
			water_goal
			meals {
				mealId
				date
				calories
				protein
				carbohydrates
				fat
			}
			calorie_goal
			protein_goal
			carbohydrates_goal
			fat_goal
		}
	}
`;

export const QUERY_USER = gql`
	query User($userId: ID!) {
		user(userId: $userId) {
			_id
			first_name
			last_name
			username
			email
			password
			weight
			height
			age
			gender
			exercises {
				_id
				duration
				intensity
				met_rating
				notes
			}
			exercise_goal
			mindful_sessions {
				_id
				duration
				notes
			}
			mindful_goal
			water_intake {
				_id
				amount
			}
			water_goal
			meals {
				_id
				calories
				protein
				carbohydrates
				fat
			}
			calorie_goal
			protein_goal
			carbohydrates_goal
			fat_goal
			exercise_stats {
				total_exercise_duration
				todays_exercise_duration
			}
			mindfulness_stats {
				total_mindful_duration
				todays_mindful_duration
			}
			water_stats {
				total_water_intake
				todays_water_intake
			}
			nutrition_stats {
				total_calories
				todays_calories
				todays_protein
				todays_carbohydrates
				todays_fat
			}
		}
	}
`;

export const QUERY_ME = gql`
	query me {
		me {
			_id
			first_name
			last_name
			username
			email
			password
			weight
			height
			age
			gender
			exercises {
				_id
				duration
				intensity
				met_rating
				notes
			}
			exercise_goal
			mindful_sessions {
				_id
				duration
				notes
			}
			mindful_goal
			water_intake {
				_id
				amount
			}
			water_goal
			meals {
				_id
				calories
				protein
				carbohydrates
				fat
			}
			calorie_goal
			protein_goal
			carbohydrates_goal
			fat_goal

			exercise_stats {
				total_exercise_duration
				todays_exercise_duration
			}
			mindfulness_stats {
				total_mindful_duration
				todays_mindful_duration
			}
			water_stats {
				total_water_intake
				todays_water_intake
			}
			nutrition_stats {
				total_calories
				todays_calories
				todays_protein
				todays_carbohydrates
				todays_fat
			}
		}
	}
`;
