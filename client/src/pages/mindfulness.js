import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Stats from '../components/Mindfulness/Stats';
import MindModal from '../components/Mindfulness/MindModal';

const Mindfulness = () => {
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
						<MindModal />
					</div>
				</div>
			</div>
		</>
	);
};

export default Mindfulness;
