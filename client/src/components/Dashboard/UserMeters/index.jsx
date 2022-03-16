import React, { useRef, useEffect } from "react";
import {
	CircularProgressbar,
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaSpa, FaWalking, FaAppleAlt, FaWater } from 'react-icons/fa';
import './style.scss';
import {gsap, Power3} from 'gsap'

export default function UserMeters({ user }) {
	const waterPercentage =
		(user.water_stats.todays_water_intake / user.water_goal) * 100;

	const caloriePercentage =
		(user.nutrition_stats.todays_calories / user.calorie_goal) * 100;

	const mindfulPercentage =
		(user.mindfulness_stats.todays_mindful_duration / user.mindful_goal) *
		100;

	const exercisePercentage =
		(user.exercise_stats.todays_exercise_duration / user.exercise_goal) *
		100;

		let UserAnim = useRef(null);
  console.log(UserAnim);

  useEffect(() => {
	  console.log(UserAnim);
	gsap.to(
		UserAnim,
		3.5,
		{
			opacity: 1,
			y: 40,
			ease: Power3.easeOut
		}
	)
  }, []);


	return (
		<section className="meter-container" ref={(container) => {
			UserAnim = container;
		  }}>
			<div className="row">
				<h1 className="page-title">
					Welcome Back,
					<span className="user-name">
						{' '}
						{`${user.first_name} ${user.last_name}!`}
					</span>
				</h1>
				<div className="meter">
					{/* EXERCISE RING */}
					<CircularProgressbarWithChildren
						value={waterPercentage === 0 ? 1 : waterPercentage}
						strokeWidth={8}
						styles={buildStyles({
							pathColor: '#37a9d6',
							trailColor: '#e7e7e7',
						})}
					>
						<div style={{ width: '82%' }}>
							{/* MINDFULNESS RING */}
							<CircularProgressbarWithChildren
								value={
									mindfulPercentage === 0
										? 1
										: mindfulPercentage
								}
								strokeWidth={9}
								styles={buildStyles({
									pathColor: '#9f3ba3',
									trailColor: '#e7e7e7',
								})}
							>
								<div style={{ width: '79.25%' }}>
									{/* EXERCISE RING */}
									<CircularProgressbarWithChildren
										value={
											exercisePercentage === 0
												? 1
												: exercisePercentage
										}
										strokeWidth={10}
										styles={buildStyles({
											pathColor: '#ffae18',
											trailColor: '#e7e7e7',
										})}
									>
										<div style={{ width: '76%' }}>
											{/* NUTRITION RING */}
											<CircularProgressbar
												value={
													caloriePercentage === 0
														? 1
														: caloriePercentage
												}
												strokeWidth={12}
												styles={buildStyles({
													pathColor: '#49b64e',
													trailColor: '#e7e7e7',
												})}
											/>
										</div>
									</CircularProgressbarWithChildren>
								</div>
							</CircularProgressbarWithChildren>
						</div>
					</CircularProgressbarWithChildren>
				</div>
				<div className="icons">
					<FaWater className="icon water" />
					<FaSpa className="icon mindful" />
					<FaWalking className="icon exercise" />
					<FaAppleAlt className="icon meal" />
				</div>
			</div>
		</section>
	);
}
