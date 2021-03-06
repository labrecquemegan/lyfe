import React, { useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ProgressProvider from '../../../utils/ProgressProvider';
import 'react-circular-progressbar/dist/styles.css';
import './calsstats.scss';
import { FaAppleAlt } from 'react-icons/fa';
import Calendar from '../../Calendar/index';

import { gsap, Power3 } from 'gsap';
import UserMacros from '../Meters/index';

const CalStats = ({ user }) => {
	const percentage =
		(user.nutrition_stats.todays_calories / user.calorie_goal) * 100;

	const getProgressStatus = () => {
		return user.nutrition_stats.todays_calories >= user.calorie_goal
			? '#81db7e'
			: user.nutrition_stats.todays_calories > 0
			? '#e4e38c'
			: '#e48c8c';
	};

	const dynamicBackgroundColor = getProgressStatus();

	let UserAnim = useRef(null);
	useEffect(() => {
		gsap.to(UserAnim, 5, {
			opacity: 1,
			y: 40,
			ease: Power3.easeOut,
		});
	}, []);

	return (
		<section
			className="calstats-container"
			ref={(container) => {
				UserAnim = container;
			}}
		>
			<div className="row">
				<h1 className="page-icon">
					<FaAppleAlt />
				</h1>
				<h2 className="page-title">Your Nutrition Statistics</h2>
				<div className="main-stat">
					<h3 className="main-stat-title">Today's Total</h3>
					<div className="progress-bar">
						<ProgressProvider valueStart={0} valueEnd={percentage}>
							{(value) => (
								<CircularProgressbar
									value={value}
									text={`${user.nutrition_stats.todays_calories}`}
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
					<Calendar />
					<UserMacros user={user} />
				</div>
				<div className="extra-stats-container">
					<h3 className="extra-stats-title">Today's Macros</h3>
					<div className="stat-row">
						Calories:{' '}
						<span className="stat-value">
							{user.nutrition_stats.todays_calories}
						</span>
					</div>
					<div className="stat-row">
						Protein:{' '}
						<span className="stat-value protein">
							{user.nutrition_stats.todays_protein}
						</span>
					</div>
					<div className="stat-row">
						Carbohydrates:{' '}
						<span className="stat-value carbohydrate">
							{user.nutrition_stats.todays_carbohydrates}
						</span>
					</div>
					<div className="stat-row">
						Fat:{' '}
						<span className="stat-value fat">
							{user.nutrition_stats.todays_fat}
						</span>
					</div>
				</div>
				<div className="remaining-cals">
					<h3>Remaining Calories For The Day</h3>
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
