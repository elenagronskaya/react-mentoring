import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../../common/Button/Button';
import { LOGOUT } from '../../constants';
import Logo from './components/Logo/Logo';
import getUsersSelector from '../../store/user/selectors';
import { store } from '../../store';
import { logoutUserThunk } from '../../store/user/thunk';
import styles from './styles.module.scss';

const Header = () => {
	const userData = useSelector(getUsersSelector);

	const logout = () => {
		store.dispatch(logoutUserThunk());
	};
	return (
		<section className={styles.wrapperHeader}>
			<Logo />
			<div className={styles.wrapperButton}>
				<span className={styles.nameAccount}>{userData?.name}</span>
				<div>
					{userData?.isAuth && <Button buttonText={LOGOUT} onClick={logout} />}
					<p className={styles.error}>{userData.error}</p>
				</div>
			</div>
		</section>
	);
};

export default Header;
