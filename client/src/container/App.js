import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';
import '../pages/LandingPage/styles/style.scss';

// Pages
import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';
import About from '../pages/about';
import Contact from '../pages/contact';
import Approach from '../pages/approach';
import CaseStudies from '../pages/caseStudies';
import Services from '../pages/services';

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
				<div className="App">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</Router>
			<Navigation />
		</ApolloProvider>
	);
};

export default App;
