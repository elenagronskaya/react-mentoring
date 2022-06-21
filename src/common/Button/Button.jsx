import React from 'react';
import './button.css';

const Button = ({ buttonText, showCourseButtonStyle, onClick }) => {
	return (
		<button
			className={showCourseButtonStyle ? showCourseButtonStyle : 'button'}
			onClick={onClick}
		>
			{buttonText}
		</button>
	);
};

export default Button;
