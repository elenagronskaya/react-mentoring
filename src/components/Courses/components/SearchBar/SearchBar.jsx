import React, { useState } from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { SEARCH } from '../../../../constants';
import styles from './styles.module.scss';

const SearchBar = ({ onSearch }) => {
	const [filter, setFilter] = useState('');

	const handleChange = (event) => {
		setFilter(event.target.value);
		if (!event.target.value) {
			onSearch('');
		}
	};

	const onSubmit = () => {
		onSearch(filter);
	};
	return (
		<div className={styles.wrapperSearchBar}>
			<Input
				placeholder='Enter course name...'
				type='search'
				onChange={handleChange}
				createCourseInput={styles.input}
			/>
			<Button
				buttonText={SEARCH}
				onClick={onSubmit}
				showCourseButtonStyle={styles.button}
			/>
		</div>
	);
};

export default SearchBar;
