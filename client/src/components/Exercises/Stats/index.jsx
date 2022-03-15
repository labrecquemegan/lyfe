import React from 'react';
import './style.scss';

export default function Stats({ user }) {
	console.log(user);
	return (
		<section className="stats-container">
			<div className="row">
				<h2>Your Exercise Statistics</h2>

				<div className="main-stat-container">
					{/* conditionally render background color based on duration */}
					<div className="days">
						<h3>Todays Progress (minutes)</h3>
					</div>
					<div
						className={
							user.exercise_stats.todays_exercise_duration >=
							user.exercise_goal
								? 'main-stat completed'
								: user.exercise_stats.todays_exercise_duration >
								  0
								? 'main-stat in-progress'
								: 'main-stat not-started'
						}
					>
						{user.exercise_stats.todays_exercise_duration}/
						<span>{user.exercise_goal}</span>
					</div>
				</div>
				<div className="extra-stats-container">
					<h3 className="extra-stats-title">Extra Stats</h3>
					<div className="stat-row">
						Total Duration:{' '}
						<span className="stat-value">
							{user.exercise_stats.total_exercise_duration} min.
						</span>
					</div>
					<div className="stat-row">
						Total Low Intensity:{' '}
						<span className="stat-value">
							{
								user.exercises.filter((exercise) =>
									exercise.intensity.includes('low')
								).length
							}
						</span>
					</div>
					<div className="stat-row">
						Total Medium Intensity:{' '}
						<span className="stat-value">
							{
								user.exercises.filter((exercise) =>
									exercise.intensity.includes('medium')
								).length
							}
						</span>
					</div>
					<div className="stat-row">
						Total High Intensity:{' '}
						<span className="stat-value">
							{
								user.exercises.filter((exercise) =>
									exercise.intensity.includes('high')
								).length
							}
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
