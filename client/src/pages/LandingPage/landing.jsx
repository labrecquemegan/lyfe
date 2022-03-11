import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';

const routes = [
	{ path: '/', name: 'Home', Component: Home },
	{ path: '/exercises', name: 'exercises', Component: CaseStudies },
	{ path: '/mindfulness', name: 'mindfulness', Component: Approach },
	{ path: '/nutrition', name: 'nutrition', Component: Services },
	{ path: '/water', name: 'water', Component: About },
	{ path: '/contact', name: 'contact', Component: Contact },
	{ path: '/login', name: 'Login', Component: LogIn },
	{ path: '/signup', name: 'signup', Component: SignUp },
];

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
		<Router>
			<Header dimensions={dimensions} />
			<div className="App">
				<Routes>
					{routes.map(({ path, Component }) => (
						<Route key={path} exact path={path}>
							<Component dimensions={dimensions} />
						</Route>
					))}
				</Routes>
			</div>
			<Navigation />
		</Router>
	);
}

export default Landing;
