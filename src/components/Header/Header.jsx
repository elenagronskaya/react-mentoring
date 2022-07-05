import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import { LOGOUT, ROUTE_LOGIN, TOKEN_KEY, USER_NAME } from '../../constants';
import Logo from './components/Logo/Logo';
import styles from './styles.module.scss';

const Header = ({ setUserName, userName }) => {
	let navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem(TOKEN_KEY);
		localStorage.removeItem(USER_NAME);
		setUserName('');
		navigate(ROUTE_LOGIN);
	};
	return (
		<section className={styles.wrapperHeader}>
			<Logo />
			<div className={styles.wrapperButton}>
				<span className={styles.nameAccount}>{userName}</span>
				{userName && <Button buttonText={LOGOUT} onClick={logout} />}
			</div>
		</section>
	);
};

Header.propTypes = {
	setUserName: PropTypes.func.isRequired,
	userName: PropTypes.string.isRequired,
};

export default Header;
