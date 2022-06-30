import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { NAME, EMAIL, PASSWORD, REGISTRATION } from '../../constants';
import { doRegistration } from '../../services/authService';
import styles from './styles.module.scss';

const Registration = () => {
	const [errors, setErrors] = useState([]);
	const [registration, setRegistration] = useState({
		name: '',
		email: '',
		password: '',
	});

	let navigate = useNavigate();

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setRegistration({ ...registration, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (registration.name && registration.email && registration.password) {
			// setRegistration({ name: '', email: '', password: '' });
			try {
				await doRegistration(
					registration.name,
					registration.email,
					registration.password
				);
				navigate('/login');
			} catch (error) {
				debugger;
				if (error.response) {
					setErrors(error.response.data.errors);
				} else {
					setErrors(['Error sending request to server']);
				}
			}
		}
	};
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h3 className={styles.title}>Registration</h3>
			<Input
				labelText={NAME}
				placeholder='Enter name'
				name='name'
				type='text'
				onChange={handleChange}
				value={registration.name}
			/>
			<Input
				labelText={EMAIL}
				placeholder='Enter email'
				name='email'
				type='email'
				onChange={handleChange}
				value={registration.email}
			/>
			<Input
				labelText={PASSWORD}
				placeholder='Enter password'
				name='password'
				type='password'
				onChange={handleChange}
				value={registration.password}
			/>
			<Button buttonText={REGISTRATION} type='submit' />
			<p className={styles.text}>
				If you have an account you can
				<Link to='/login' className={styles.link}>
					{' '}
					Login
				</Link>
			</p>
			{errors.map((error) => {
				return (
					<p key={`regestration-${error}`} className={styles.error}>
						{error}
					</p>
				);
			})}
		</form>
	);
};

export default Registration;
