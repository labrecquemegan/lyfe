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
							<a className="skill" href="/exercises">
								<div className="skill-title">
									<div>
										<h2>Exercise</h2>
									</div>
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
								</div>
							</a>
							<a className="skill" href="/mindfulness">
								<div className="skill-title">
									<h2>Mindfulness</h2>
								</div>
							</a>
							<a className="skill" href="water">
								<div className="skill-title">
									<h2>Water</h2>
								</div>
							</a>
							<a className="skill" href="nutrition">
								<div className="skill-title">
									<h2>Nutrition</h2>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
