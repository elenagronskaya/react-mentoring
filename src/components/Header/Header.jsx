import React from 'react';
import Button from '../../common/Button/Button';
import { LOGOUT } from '../../constants';
import Logo from './components/Logo/Logo';
import styles from './styles.module.scss';

const Header = () => (
	<section className={styles.wrapperHeader}>
		<Logo />
		<div className={styles.wrapperButton}>
			<span className={styles.nameAccount}>Julia</span>
			<Button buttonText={LOGOUT} />
		</div>
	</section>
);

export default Header;
