import React, {useEffect, useRef} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ProgressProvider from '../../../utils/ProgressProvider';
import 'react-circular-progressbar/dist/styles.css';
import './style.scss';
import { FaSpa } from 'react-icons/fa';
import Calendar from '../../Calendar/index';
import {gsap, Power3} from 'gsap'


const Stats = ({ user }) => {
	const percentage =
		(user.mindfulness_stats.todays_mindful_duration / user.mindful_goal) *
		100;

	const getProgressStatus = () => {
		return user.mindfulness_stats.todays_mindful_duration >=
			user.mindful_goal
			? '#81db7e'
			: user.mindfulness_stats.todays_mindful_duration > 0
			? '#e4e38c'
			: '#e48c8c';
	};

	const dynamicBackgroundColor = getProgressStatus();

	let UserAnim = useRef(null);
	useEffect(() => {
	  gsap.to(
		  UserAnim,
		  5,
		  {
			  opacity: 1,
			  y: 40,
			  ease: Power3.easeOut
		  }
	  )
	}, []);

	return (
		<section className="mindfulness-container" ref={(container) => {
			UserAnim = container;
		  }}>
			<div className="row">
				<h1 className="page-icon">
					<FaSpa />
				</h1>
				<h2 className="page-title">Your Mindfulness Statistics</h2>
				<div className="main-stat">
					<h3 className="main-stat-title">Today's Total</h3>
					<div className="progress-bar">
						<ProgressProvider valueStart={0} valueEnd={percentage}>
							{(value) => (
								<CircularProgressbar
									value={value}
									text={`${user.mindfulness_stats.todays_mindful_duration}/${user.mindful_goal}`}
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
					{/* <div
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
					</div> */}
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
