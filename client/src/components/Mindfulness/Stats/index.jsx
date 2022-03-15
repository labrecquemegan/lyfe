import React from 'react';
import './style.scss';

const Stats = ({ user }) => {
	console.log(user);
	return (
		<section className="mindfulness-container">
			<div className="row">
				<h2>Your Mindfulness Statistics</h2>

				<div className="main-stat-container">
					{/* conditionally render background color based on duration */}
					<div className="days">
						<h3>Todays Progress (minutes)</h3>
					</div>
					<div
						className={
							user.mindfulness_stats.todays_mindful_duration >=
							user.mindful_goal
								? 'main-stat completed'
								: user.mindfulness_stats
										.todays_mindful_duration > 0
								? 'main-stat in-progress'
								: 'main-stat not-started'
						}
					>
						{user.mindfulness_stats.todays_mindful_duration}/
						<span>{user.mindful_goal}</span>
					</div>
				</div>
				<div className="extra-stats-container">
					<h3 className="extra-stats-title">Extra Stats</h3>
					<div className="stat-row">
						Total Duration:{' '}
						<span className="stat-value">
							{user.mindfulness_stats.total_mindful_duration} min.
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stats;
