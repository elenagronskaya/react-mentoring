import React from 'react';
import styles from './styles.module.scss';

const Button = ({ buttonText, showCourseButtonStyle, onClick }) => (
	<button
		className={showCourseButtonStyle ? showCourseButtonStyle : styles.button}
		onClick={onClick}
	>
		{buttonText}
	</button>
);

export default Button;
