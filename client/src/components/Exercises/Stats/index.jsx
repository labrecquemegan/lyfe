import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ProgressProvider from '../../../utils/ProgressProvider';
import 'react-circular-progressbar/dist/styles.css';
import './style.scss';
import { FaWalking } from 'react-icons/fa';

export default function Stats({ user }) {
	const percentage =
		(user.exercise_stats.todays_exercise_duration / user.exercise_goal) *
		100;

	const getProgressStatus = () => {
		return user.exercise_stats.todays_exercise_duration >=
			user.exercise_goal
			? '#81db7e'
			: user.exercise_stats.todays_exercise_duration > 0
			? '#e4e38c'
			: '#e48c8c';
	};

	const dynamicBackgroundColor = getProgressStatus();

	return (
		<section className="stats-container">
			<div className="row">
				<h1 className="page-icon">
					<FaWalking />
				</h1>
				<h2 className="page-title">Your Exercise Statistics</h2>
				<div className="main-stat">
					<h3 className="main-stat-title">Today's Total</h3>
					<div className="progress-bar">
						<ProgressProvider valueStart={0} valueEnd={percentage}>
							{(value) => (
								<CircularProgressbar
									value={value}
									text={`${user.exercise_stats.todays_exercise_duration}/${user.exercise_goal}`}
									background
									backgroundPadding={6}
									styles={buildStyles({
										backgroundColor: `${dynamicBackgroundColor}`,
										textColor: '#fff',
										pathColor: '#fff',
										trailColor: 'transparent',
										pathTransitionDuration: 1,
									})}
								/>
							)}
						</ProgressProvider>
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
