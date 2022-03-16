import React from 'react';
import Stats from '../components/Water/Stats';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import WaterModal from '../components/Water/waterModal';

const Water = () => {
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
						{/* <WaterInput /> */}
						<WaterModal />
					</div>
				</div>
			</div>
		</>
	);
};

export default Water;
