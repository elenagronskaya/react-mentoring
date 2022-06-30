import React from 'react';
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

export default Input;
