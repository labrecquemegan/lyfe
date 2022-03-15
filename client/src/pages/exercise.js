import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Stats from '../components/Exercises/Stats';
import Workouts from '../components/Exercises/Workouts';
import ExerciseInput from '../components/Exercises/ExerInput';

const Exercise = () => {
	const { loading, data } = useQuery(QUERY_ME, {
		nextFetchPolicy: 'cache-first',
	});
	const user = data?.me || [];

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<div className="page">
				<div className="container">
					<div>
						<Stats user={user} />
						<ExerciseInput />
					</div>
				</div>
			</div>
		</>
	);
};

export default Exercise;