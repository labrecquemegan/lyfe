import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import './signup.scss';

const Signup = (props) => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        username: '',
    });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log('form submitted:', formState);
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
                username: formState.username,
            },
        });
        console.log(mutationResponse);
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
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
            <div className="centering">
                <h1>Signup</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="txt_field">
                        <input
                            name="firstName"
                            type="text"
                            id="firstName"
                            onChange={handleChange}
                            required
                        />
                        <label>First Name:</label>
                    </div>
                    <div className="txt_field">
                        <input
                            name="lastName"
                            type="text"
                            id="lastName"
                            onChange={handleChange}
                            required
                        />
                        <label>Last Name:</label>
                    </div>
                    <div className="txt_field">                    
                        <input
                            name="username"
                            type="text"
                            id="username"
                            onChange={handleChange}
                            required
                        />
                        <label>Username:</label>
                    </div>
                    <div className="txt_field">   
                        <input
                            name="email"
                            type="text"
                            id="email"
                            onChange={handleChange}
                            required
                        />
                        <label>Email:</label>
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
                    <div className="flex-row flex-end">
                        <button type="submit">Submit</button>
                    </div>

                    {/* Links to the login page */}
                    <Link to="/login" className='signup_link'>← Go to Login</Link>

                </form>
            </div>
        </div>
    );
};

export default Signup;
