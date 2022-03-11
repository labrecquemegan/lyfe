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
import Login from '../pages/login';
import Signup from '../pages/signup';
import About from '../pages/water';
import Contact from '../pages/contact';
import Approach from '../pages/mindfulness';
import CaseStudies from '../pages/exercise';
import Services from '../pages/nutrition';

// Components
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const httpLink = createHttpLink({
	uri: '/graphql',
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
			<Router>
				<Header dimension={dimensions} />
				<Landing />
				<div className="App">
					<Route path="/" element={<Home />} />
				</div>
			</Router>
			<Navigation />
		</ApolloProvider>
	);
};

export default App;
