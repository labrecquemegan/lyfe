import React from 'react';
// import Calendar from '../components/Calendar/index';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import CalStats from '../components/Nutrition/CalsStats';
import FoodModal from '../components/Nutrition/FoodModal';

const Nutrition = () => {
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
				<CalStats user={user} />
				<FoodModal />
			</div>
		</>
	);
};

export default Nutrition;
