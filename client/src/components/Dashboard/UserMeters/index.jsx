import {
	CircularProgressbar,
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaSpa, FaWalk } from 'react-icons/fa';
import './style.scss';
import leaf from '../../../assets/leaf.png';

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

	return (
		<section className="meter-container">
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
								<div style={{ width: '80%' }}>
									{/* NUTRITION RING */}
									<CircularProgressbarWithChildren
										value={
											caloriePercentage === 0
												? 1
												: caloriePercentage
										}
										strokeWidth={10}
										styles={buildStyles({
											pathColor: '#ffae18',
											trailColor: '#e7e7e7',
										})}
									>
										<div style={{ width: '76%' }}>
											<CircularProgressbar
												value={
													exercisePercentage === 0
														? 1
														: exercisePercentage
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
			</div>
		</section>
	);
}
