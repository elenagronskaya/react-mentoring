import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import {
	EMAIL,
	PASSWORD,
	LOGIN,
	ROUTE_COURSES,
	ROUTE_REGISTRATION,
} from '../../constants';
import getUsersSelector from '../../store/user/selectors';
import { loginUser } from '../../services';
import styles from './styles.module.scss';

const Login = () => {
	const [login, setLogin] = useState({
		email: '',
		password: '',
	});

	const userData = useSelector(getUsersSelector);

	const navigate = useNavigate();

	useEffect(() => {
		if (userData.isAuth) {
			navigate(ROUTE_COURSES);
		}
	}, [navigate, userData]);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setLogin({ ...login, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const result = await loginUser(login.email, login.password);

		if (result) {
			navigate(ROUTE_COURSES);
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
				<Link to={ROUTE_REGISTRATION} className={styles.link}>
					{' '}
					Registration
				</Link>
			</p>
			<p className={styles.error}>{userData.error}</p>
		</form>
	);
};

export default Login;
