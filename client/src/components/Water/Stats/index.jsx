import React, {useEffect, useRef} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ProgressProvider from '../../../utils/ProgressProvider';
import 'react-circular-progressbar/dist/styles.css';
import './waterstats.scss';
import { FaWater } from 'react-icons/fa';
import Calendar from '../../Calendar/index';
import {gsap, Power3} from 'gsap';

export default function Stats({ user }) {
	const percentage =
		(user.water_stats.todays_water_intake / user.water_goal) * 100;

	const getProgressStatus = () => {
		return user.water_stats.todays_water_intake >= user.water_goal
			? '#81db7e'
			: user.water_stats.todays_water_intake > 0
			? '#e4e38c'
			: '#e48c8c';
	};

	const dynamicBackgroundColor = getProgressStatus();

	let UserAnim = useRef(null);
	console.log(UserAnim);
  
	useEffect(() => {
		console.log(UserAnim);
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
		<section className="water-stats-container" ref={(container) => {
			UserAnim = container;
		  }}>
			<div className="row">
				<h1 className="water-page-icon">
					<FaWater />
				</h1>
				<h2 className="page-title">Your Water Statistics</h2>
				<div className="main-stat">
					<h3 className="main-stat-title">Today's Total</h3>
					<div className="progress-bar">
						<ProgressProvider valueStart={0} valueEnd={percentage}>
							{(value) => (
								<CircularProgressbar
									value={value}
									text={`${user.water_stats.todays_water_intake}/${user.water_goal}`}
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
				</div>
				<div className="extra-stats-container">
					<h3 className="extra-stats-title">Extra Stats</h3>
					<div className="stat-row">
						Total Water Intake:{' '}
						<span className="stat-value">
							{user.water_stats.total_water_intake} min.
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
