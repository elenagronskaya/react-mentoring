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
			className={createCourseInput}
			type={type}
			onChange={onChange}
			value={value}
			name={name}
		/>
	</label>
);

Input.propTypes = {
	placeholder: PropTypes.string.isRequired,
	createCourseInput: PropTypes.string,
	labelText: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
};

Input.defaultProps = {
	type: 'input',
	createCourseInput: styles.input,
	labelText: '',
};

export default Input;
