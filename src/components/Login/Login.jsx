import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { EMAIL, PASSWORD, LOGIN, TOKEN_KEY, USER_NAME } from '../../constants';
import isLoggedIn from '../../helpers/checkLogIn';
import { doLogin } from '../../services/authService';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Login = ({ setUserName }) => {
	const [error, setError] = useState('');
	const [login, setLogin] = useState({
		email: '',
		password: '',
	});

	let navigate = useNavigate();

	useEffect(() => {
		if (isLoggedIn()) {
			navigate('/courses');
			return;
		}
	}, [navigate]);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setLogin({ ...login, [name]: value });
	};
	const WriteLoginResponeToLocalStorage = (token, userName) => {
		localStorage.setItem(TOKEN_KEY, token);
		localStorage.setItem(USER_NAME, userName);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await doLogin(login.email, login.password);

			let data = response.data;
			const token = data.result;
			const userName = data.user.name;
			setUserName(userName);
			WriteLoginResponeToLocalStorage(token, userName);
			navigate('/courses');
		} catch (err) {
			if (err.response) {
				setError(err.response.data.result);
			} else {
				setError('Error sending request to server');
			}
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h3 className={styles.title}>Login</h3>
			<Input
				labelText={EMAIL}
				placeholder='Enter email'
				type='email'
				name='email'
				value={login.email}
				onChange={handleChange}
			/>
			<Input
				labelText={PASSWORD}
				placeholder='Enter password'
				type='password'
				name='password'
				value={login.password}
				onChange={handleChange}
			/>
			<Button buttonText={LOGIN} type='submit' />
			<p className={styles.text}>
				If you not have an account you can
				<Link to='/registration' className={styles.link}>
					{' '}
					Registration
				</Link>
			</p>
			<p className={styles.error}>{error}</p>
		</form>
	);
};

Login.propTypes = {
	setUserName: PropTypes.func,
};

export default Login;
