import React from 'react';
import styles from './styles.module.scss';

const Input = ({
	placeholder,
	onChange,
	labelText,
	createCourseInput,
	value,
	type,
}) => (
	<label htmlFor='html' className={styles.label}>
		{labelText}
		<input
			placeholder={placeholder}
			className={createCourseInput ? createCourseInput : styles.input}
			type={type}
			onChange={onChange}
			value={value}
		/>
	</label>
);

export default Input;
