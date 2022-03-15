import React, { useEffect } from 'react';
// import Calendar from '../components/Calendar/index';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import CalStats from '../components/Nutrition/CalsStats';
import FoodInput from '../components/Nutrition/FoodInput';

import Auth from '../utils/auth';

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
				<FoodInput />
			</div>
		</>
	);
};

export default Nutrition;
