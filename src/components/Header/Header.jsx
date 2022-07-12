import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../../common/Button/Button';
import {
	EMAIL,
	LOGOUT,
	ROUTE_LOGIN,
	TOKEN_KEY,
	USER_NAME,
} from '../../constants';
import Logo from './components/Logo/Logo';
import getUsersSelector from '../../store/user/selectors';
import store from '../../store';
import { logoutUser } from '../../store/user/actions';
import styles from './styles.module.scss';

const Header = () => {
	const navigate = useNavigate();

	const userData = useSelector(getUsersSelector);

	const logout = () => {
		localStorage.removeItem(TOKEN_KEY);
		localStorage.removeItem(USER_NAME);
		localStorage.removeItem(EMAIL);
		store.dispatch(logoutUser());

		navigate(ROUTE_LOGIN);
	};
	return (
		<section className={styles.wrapperHeader}>
			<Logo />
			<div className={styles.wrapperButton}>
				<span className={styles.nameAccount}>{userData?.name}</span>
				{userData?.isAuth && <Button buttonText={LOGOUT} onClick={logout} />}
			</div>
		</section>
	);
};

export default Header;
