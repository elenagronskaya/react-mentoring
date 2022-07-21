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
import store from '../../store';
import styles from './styles.module.scss';
import { loginUserThunk } from '../../store/user/thunk';

const Login = () => {
	const [login, setLogin] = useState({
		email: '',
		password: '',
	});
	const userData = useSelector(getUsersSelector);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setLogin({ ...login, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		store.dispatch(loginUserThunk(login.email, login.password));
	};

	useEffect(() => {
		if (userData.isAuth) {
			navigate(ROUTE_COURSES);
		}
	}, [navigate, userData]);

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
