import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../../common/Button/Button';
import { LOGOUT, ROUTE_LOGIN, TOKEN_KEY } from '../../constants';
import Logo from './components/Logo/Logo';
import getUsersSelector from '../../store/user/selectors';
import store from '../../store';
import { logoutUser } from '../../store/user/actions';
import styles from './styles.module.scss';

const Header = () => {
	let navigate = useNavigate();

	const userData = useSelector(getUsersSelector);

	const logout = () => {
		localStorage.removeItem(TOKEN_KEY);
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
