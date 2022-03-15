import UserBars from '../components/Dashboard/UserBars';
import UserInfo from '../components/Dashboard/UserInfo';
import UserMeters from '../components/Dashboard/UserMeters';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Dashboard = () => {
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
					<UserMeters user={user} />
					<UserBars user={user} />
					<UserInfo user={user} />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
