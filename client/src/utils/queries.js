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
		    exercises: {
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
        }
    }
`;


