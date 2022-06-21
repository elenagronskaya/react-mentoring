import React from 'react';
import './input.css';

const Input = ({
	placeholder,
	onChange,
	type,
	labelText,
	createCourseInput,
}) => {
	return (
		<label htmlFor='html' className='label'>
			{labelText}
			<input
				placeholder={placeholder}
				className={createCourseInput ? createCourseInput : 'input'}
				type={type}
				onChange={onChange}
			/>
		</label>
	);
};

export default Input;
