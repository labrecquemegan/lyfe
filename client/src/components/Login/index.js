import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './login.scss';

const Login = (props) => {
	const [formState, setFormState] = useState({ email: '', password: '' });
	const [login, { error }] = useMutation(LOGIN);

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const mutationResponse = await login({
				variables: {
					email: formState.email,
					password: formState.password,
				},
			});
			const token = mutationResponse.data.login.token;
			Auth.login(token);
		} catch (e) {
			console.log(e);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	return (
		<div className="page">
			<div className="center">
				<h1>Login</h1>
				<form onSubmit={handleFormSubmit} autoComplete="off">
					<div className="txt_field">
						<input
							name="email"
							type="text"
							id="email"
							onChange={handleChange}
							required
						/>
						<label>Username:</label>
					</div>
					<div className="txt_field">
						<input
							name="password"
							type="password"
							id="pwd"
							onChange={handleChange}
							required
						/>
						<label>Password:</label>
					</div>
					<div className="pass">Forgot Password?</div>

					{error ? (
						<div>
							<p className="error-text">{error.message}</p>
						</div>
					) : null}
					<button type="submit" className="loginButton">
						Submit
					</button>
					<Link to="/signup" className="signup_link">
						← Go to Signup
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Login;
