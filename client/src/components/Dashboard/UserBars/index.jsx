import './userbars.scss';
import { AiFillCheckCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export default function UserBars({ user }) {
	console.log(user);
	return (
		<section className="userbars-container">
			<div className="row">
				<h2>
					Welcome Back,
					<span className="user-name">
						{' '}
						{`${user.first_name} ${user.last_name}!`}
					</span>
				</h2>
				<div className="skills" id="skills" data-scroll-section>
					<div>
						<div className="skills-tree" data-scroll>
							<a
								className={
									user.exercise_stats
										.todays_exercise_duration >=
									user.exercise_goal
										? 'skill completed'
										: 'skill'
								}
								href="/exercises"
							>
								{/* Exercise bar */}
								<h2>Exercise</h2>

								{user.exercise_stats.todays_exercise_duration >=
								user.exercise_goal ? (
									<IconContext.Provider
										value={{
											color: 'green',
											className: 'global-class-name',
											size: '3.5rem',
										}}
									>
										<div className="check">
											<AiFillCheckCircle />
										</div>
									</IconContext.Provider>
								) : (
									<></>
								)}
							</a>
							{/* Mindfulness bar */}
							<a
								className={
									user.mindfulness_stats
										.todays_mindful_duration >=
									user.mindful_goal
										? 'skill completed'
										: 'skill'
								}
								href="/mindfulness"
							>
								<h2>Mindfulness</h2>
								{user.mindfulness_stats
									.todays_mindful_duration >=
								user.mindful_goal ? (
									<IconContext.Provider
										value={{
											color: 'green',
											className: 'global-class-name',
											size: '3.5rem',
										}}
									>
										<div className="check">
											<AiFillCheckCircle />
										</div>
									</IconContext.Provider>
								) : (
									<></>
								)}
							</a>
							{/* Water bar */}
							<a
								className={
									user.water_stats.todays_water_intake >=
									user.water_goal
										? 'skill completed'
										: 'skill'
								}
								href="water"
							>
								<h2>Water</h2>
								{user.water_stats.todays_water_intake >=
								user.water_goal ? (
									<IconContext.Provider
										value={{
											color: 'green',
											className: 'global-class-name',
											size: '3.5rem',
										}}
									>
										<div className="check">
											<AiFillCheckCircle />
										</div>
									</IconContext.Provider>
								) : (
									<></>
								)}
							</a>
							{/* Nutrition bar */}
							<a
								className={
									user.nutrition_stats.todays_calories >=
									user.calorie_goal
										? 'skill completed'
										: 'skill'
								}
								href="nutrition"
							>
								<h2>Nutrition</h2>
								{user.nutrition_stats.todays_calories >=
								user.calorie_goal ? (
									<IconContext.Provider
										value={{
											color: 'green',
											className: 'global-class-name',
											size: '3.5rem',
										}}
									>
										<div className="check">
											<AiFillCheckCircle />
										</div>
									</IconContext.Provider>
								) : (
									<></>
								)}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
