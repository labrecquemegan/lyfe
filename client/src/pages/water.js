import React from 'react';
import WaterInput from '../components/Water/WaterInput/waterinput';
import Stats from '../components/Water/Stats';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';



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
						<Stats user={user}/>
						{/* <WaterInput /> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Water;
