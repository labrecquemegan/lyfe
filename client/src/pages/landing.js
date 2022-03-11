import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { gsap } from 'gsap';
import '../styles/style.scss';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Exercise from './exercise';
import Mindfulness from './mindfulness';
import Nutrition from './nutrition';
import Water from './water';
import Home from './home';
import Contact from './contact';
import LogIn from './login';
import SignUp from './signup';

const routes = [
	{ path: '/', name: 'Home', Component: Home },
	{ path: '/exercises', name: 'exercises', Component: Exercise },
	{ path: '/mindfulness', name: 'mindfulness', Component: Mindfulness },
	{ path: '/nutrition', name: 'nutrition', Component: Nutrition },
	{ path: '/water', name: 'water', Component: Water },
	{ path: '/contact', name: 'contact', Component: Contact },
	{ path: '/login', name: 'Login', Component: LogIn },
	{ path: '/signup', name: 'signup', Component: SignUp },
];
function debounce(fn, ms) {
	let timer;
	return () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}
function Landing() {
	const [dimensions, setDimensions] = React.useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});
	useEffect(() => {
		// prevents flashing
		gsap.to('body', 0, { css: { visibility: 'visible' } });
		const debouncedHandleResize = debounce(function handleResize() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		}, 1000);
		window.addEventListener('resize', debouncedHandleResize);
		return () => {
			window.removeEventListener('resize', debouncedHandleResize);
		};
	});
	return (
		<>
			<Header dimensions={dimensions} />
			{/* <div className="App">
				{routes.map(({ path, Component }) => (
					<Route key={path} exact path={path}>
						<Component dimensions={dimensions} />
					</Route>
				))}
			</div> */}
			<Navigation />
		</>
	);
}
export default Landing;
