import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Button = ({ buttonText, showCourseButtonStyle, onClick, type }) => (
	<button
		className={showCourseButtonStyle ? showCourseButtonStyle : styles.button}
		onClick={onClick}
		type={type}
	>
		{buttonText}
	</button>
);

Button.propTypes = {
	buttonText: PropTypes.string,
	showCourseButtonStyle: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
};

export default Button;
