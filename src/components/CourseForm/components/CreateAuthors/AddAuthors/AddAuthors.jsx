import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../../common/Button/Button';
import Input from '../../../../../common/Input/Input';
import { AUTHOR_NAME, CREATE_AUTHOR } from '../../../../../constants';
import { validateMinLength } from '../../../../../helpers/validationInputs';
import styles from './styles.module.scss';

const AddAuthors = ({ createAuthor }) => {
	const [name, setName] = useState('');

	const validate = () => {
		return validateMinLength(name, 2);
	};

	const onButtonClick = () => {
		if (!validate()) {
			return;
		}
		createAuthor(name);
		setName('');
	};

	return (
		<div className={styles.addAuthorWrapper}>
			<h2 className={styles.addAuthorTitle}>Add author</h2>
			<Input
				labelText={AUTHOR_NAME}
				placeholder='Enter author name...'
				createCourseInput={styles.addInput}
				onChange={(event) => setName(event.target.value)}
				value={name}
				type='text'
			/>
			<Button
				buttonText={CREATE_AUTHOR}
				showCourseButtonStyle={styles.showCourseButtonStyle}
				onClick={onButtonClick}
			/>
		</div>
	);
};

AddAuthors.propTypes = {
	createAuthor: PropTypes.func.isRequired,
};

export default AddAuthors;
