import React from 'react';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import './Header.css';

const Header = () => {
	return (
		<div className='wrapperHeader'>
			<Logo />
			<div className='wrapperButton'>
				<span className='nameAccount'>Julia</span>
				<Button buttonText='logout' />
			</div>
		</div>
	);
};

export default Header;
