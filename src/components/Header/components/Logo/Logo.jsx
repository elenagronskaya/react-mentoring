import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../../../../assets/logo.png';

const Logo = () => {
	return (
		<Link to={'/'}>
			<img src={LogoIcon} alt='logo' className='logoIcon' />
		</Link>
	);
};

export default Logo;
