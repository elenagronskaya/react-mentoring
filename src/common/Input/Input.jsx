import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Input = ({
	placeholder,
	onChange,
	labelText,
	createCourseInput,
	value,
	type,
	name,
}) => (
	<label htmlFor='html' className={styles.label}>
		{labelText}
		<input
			placeholder={placeholder}
			className={createCourseInput ? createCourseInput : styles.input}
			type={type}
			onChange={onChange}
			value={value}
			name={name}
		/>
	</label>
);

Input.propTypes = {
	placeholder: PropTypes.string,
	createCourseInput: PropTypes.string,
	labelText: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
};

export default Input;
