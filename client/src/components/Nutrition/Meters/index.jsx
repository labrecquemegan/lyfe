import React, { useRef, useEffect } from "react";
import {
	CircularProgressbar,
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ring.scss';
import {gsap, Power3} from 'gsap'

export default function UserMacros({ user }) {

    const proteinPercentage =
		(user.nutrition_stats.todays_protein / user.protein_goal) * 100;

	const carbohydratePercentage =
		(user.nutrition_stats.todays_carbohydrates / user.carbohydrates_goal) *
		100;

	const fatPercentage =
		(user.nutrition_stats.todays_fat / user.protein_fat) *
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
				<div className="meter">
					{/* EXERCISE RING */}
					<CircularProgressbarWithChildren
						value={proteinPercentage === 0 ? 1 : proteinPercentage}
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
									carbohydratePercentage === 0
										? 1
										: carbohydratePercentage
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
											fatPercentage === 0
												? 1
												: fatPercentage
										}
										strokeWidth={10}
										styles={buildStyles({
											pathColor: '#ffae18',
											trailColor: '#e7e7e7',
										})}
									>
									</CircularProgressbarWithChildren>
								</div>
							</CircularProgressbarWithChildren>
						</div>
					</CircularProgressbarWithChildren>
				</div>
        </section>
    );
}
