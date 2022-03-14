import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';
import '../styles/style.scss';

// Pages
import Landing from '../pages/landing';
import Home from '../pages/home';
import LogIn from '../pages/login';
import SignUp from '../pages/signup';
import Water from '../pages/water';
import Contact from '../pages/contact';
import Mindfulness from '../pages/mindfulness';
import Exercise from '../pages/exercise';
import Nutrition from '../pages/nutrition';

// Components
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const httpLink = createHttpLink({
	uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

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

const App = () => {
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
		<ApolloProvider client={client}>
			<Header dimensions={dimensions} />
			<div className="App">
				{routes.map(({ path, Component }) => (
					<Route key={path} exact path={path}>
						<Component dimensions={dimensions} />
					</Route>
				))}
			</div>
			<Navigation />
		</ApolloProvider>
	);
};

export default App;
