import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Button = ({ buttonText, showCourseButtonStyle, onClick, type }) => (
	<button className={showCourseButtonStyle} onClick={onClick} type={type}>
		{buttonText}
	</button>
);

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	showCourseButtonStyle: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
};
Button.defaultProps = { type: 'button', showCourseButtonStyle: styles.button };

export default Button;
