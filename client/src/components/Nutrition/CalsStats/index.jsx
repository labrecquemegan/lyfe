import React from 'react';
import './calsstats.scss';

const CalStats = ({ user }) => {
	return (
		<section className="calstats-container">
			<div className="row">
				<h2>Your Calorie Counter</h2>
				<div className="todays-cals">
					<h2>Today's Total Calories</h2>
					<input
						className="total-calories"
						type="text"
						readOnly
						value={user.nutrition_stats.todays_calories}
					/>
				</div>
				<div className="remaining-cals">
					<h2>Remaining Calories For The Day</h2>
					<span>
						{user.calorie_goal -
							user.nutrition_stats.todays_calories}
					</span>
				</div>
			</div>
		</section>
	);
};

export default CalStats;
