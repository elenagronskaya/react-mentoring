import React from 'react';
import Button from '../../common/Button/Button';
import { LOGOUT } from '../../constants';
import Logo from './components/Logo/Logo';
import './header.css';

const Header = () => {
	return (
		<section className='wrapperHeader'>
			<Logo />
			<div className='wrapperButton'>
				<span className='nameAccount'>Julia</span>
				<Button buttonText={LOGOUT} />
			</div>
		</section>
	);
};

export default Header;
