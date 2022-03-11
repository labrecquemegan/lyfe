import React, { useState, useEffect, useRef } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import useLocoScroll from '../hooks/useLocoScroll';

import './App.css';

// Pages

import LandingPage from '../pages/LandingPage/landing';

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});

const App = () => {
	const ref = useRef(null);
	const [preloader, setPreload] = useState(true);

	useLocoScroll(!preloader);

	useEffect(() => {
		if (!preloader && ref) {
			if (typeof window === 'undefined' || !window.document) {
				return;
			}
		}
	}, [preloader]);

	const [timer, setTimer] = React.useState(0);

	const id = React.useRef(null);

	const clear = () => {
		window.clearInterval(id.current);
		setPreload(false);
	};

	React.useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer((time) => time - 1);
		}, 1000);
		return () => clear();
	}, []);

	React.useEffect(() => {
		if (timer === 0) {
			clear();
		}
	}, [timer]);

	if (typeof window === 'undefined' || !window.document) {
		return null;
	}

	return (
		<ApolloProvider client={client}>
			{preloader ? (
				<div className="loader-wrapper absolute"></div>
			) : (
				<div
					className="main-container"
					id="main-container"
					data-scroll-container
					ref={ref}
				>
					<LandingPage />
				</div>
			)}
		</ApolloProvider>
	);
};
export default App;
