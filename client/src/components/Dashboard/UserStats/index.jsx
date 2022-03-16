import './style.scss';

const UserStats = ({ user }) => {
	return (
		<section className="user-stat-container">
			<div className="row">
				<h2>Your Goals</h2>
				<div className="user-goals">
					<div className="user-goal">
						<h3>Water Goal</h3>
						<span>{user.water_goal}</span>
					</div>
					<div className="user-goal">
						<h3>Mindfulness Goal</h3>
						<span>{user.mindful_goal}</span>
					</div>
					<div className="user-goal">
						<h3>Exercise Goal</h3>
						<span>{user.exercise_goal}</span>
					</div>
					<div className="user-goal">
						<h3>Calorie Goal</h3>
						<span>{user.calorie_goal}</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserStats;
