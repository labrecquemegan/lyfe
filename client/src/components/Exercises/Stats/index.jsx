import React from 'react';
import './style.scss';

export default function Stats({ user }) {
	console.log(user);
	return (
		<section className="stats-container">
			<div className="row">
				<div>
					<div></div>
				</div>
				<h2>Your Exercise Statistics</h2>
				<div className="btn-row">
					<div className="stats">
						<div className="stat-boxes">
							<span>
								{user.exercise_stats.todays_exercise_duration}
							</span>
							<div className="days">
								<h3>Todays Duration</h3>
							</div>
						</div>
						<div className="stat-boxes">
							<span>
								{user.exercise_stats.total_exercise_duration}
							</span>
							<div className="total">
								<h3>Total Duration</h3>
							</div>
						</div>
					</div>
				</div>
				<h3 className="goal-div">
					Your Exercise Goal: {user.exercise_goal} min/day
				</h3>
			</div>
		</section>
	);
}
