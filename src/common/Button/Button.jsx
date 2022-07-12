import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Button = ({
	buttonText,
	showCourseButtonStyle,
	onClick,
	type,
	imageLink,
}) => (
	<button className={showCourseButtonStyle} onClick={onClick} type={type}>
		{buttonText || <img src={imageLink} alt='button-text' />}
	</button>
);

Button.propTypes = {
	buttonText: PropTypes.string,
	showCourseButtonStyle: PropTypes.string,
	onClick: PropTypes.func,
	imageLink: PropTypes.string,
	type: PropTypes.string,
};
Button.defaultProps = {
	type: 'button',
	showCourseButtonStyle: styles.button,
	imageLink: '',
	buttonText: '',
};

export default Button;
