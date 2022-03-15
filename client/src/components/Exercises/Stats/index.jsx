import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.scss';

export default function Stats({ user }) {
	const percentage =
		(user.exercise_stats.todays_exercise_duration / user.exercise_goal) *
		100;

	const getProgressStatus = () => {
		return user.exercise_stats.todays_exercise_duration >=
			user.exercise_goal
			? '#b5e48c'
			: user.exercise_stats.todays_exercise_duration > 0
			? '#e4e38c'
			: '#e48c8c';
	};

	const dynamicBackgroundColor = getProgressStatus();
	return (
		<section className="stats-container">
			<div className="row">
				<h2>Your Exercise Statistics</h2>
				{/* conditionally render background color based on duration */}
				<div className="days">
					<h3>Todays Progress (minutes)</h3>
				</div>
				<div className="progress-bar">
					<CircularProgressbar
						value={percentage}
						text={`${user.exercise_stats.todays_exercise_duration}/${user.exercise_goal}`}
						background
						backgroundPadding={6}
						styles={buildStyles({
							// backgroundColor: '#3e98c7',
							backgroundColor: `${dynamicBackgroundColor}`,
							textColor: '#fff',
							pathColor: '#fff',
							trailColor: 'transparent',
						})}
					/>
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
