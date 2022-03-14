import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav>
			<div className="container">
				<div className="nav-columns">
					<div className="nav-column">
						<ul className="nav-links">
							<li>
								<NavLink to="/exercises" exact>
									Exercise
								</NavLink>
							</li>
							<li>
								<NavLink to="/mindfulness" exact>
									Mindfulness
								</NavLink>
							</li>
							<li>
								<NavLink to="/nutrition" exact>
									Nutrition
								</NavLink>
							</li>
							<li>
								<NavLink to="/water" exact>
									Water
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="nav-column">
						<div className="nav-infos">
							<ul className="nav-info">
								<li className="nav-info-label">Sign In</li>
								<li>
									<NavLink to="/signup" exact>
										Sign Up
									</NavLink>
									<NavLink to="/login" exact>
										<button type="button">Log In</button>
									</NavLink>
									<NavLink to="/" exact>
										<button type="button">Log Out</button>
									</NavLink>
								</li>
								<li className="nav-info-label">Contact</li>
								<li>
									<NavLink to="/contact" exact>
										Get in touch with the devs
									</NavLink>
								</li>
								<li className="nav-info-label">Legal</li>
								<li>
									<NavLink to="/legal" exact>
										Privacy & Cookies
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
