import React from 'react';
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

export default Button;
