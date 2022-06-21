import React, { useState } from 'react';
import Button from '../../../../../common/Button/Button';
import Input from '../../../../../common/Input/Input';
import { AUTHOR_NAME, CREATE_AUTHOR } from '../../../../../constants';
import './addAuthors.css';

const AddAuthors = ({ createAuthor }) => {
	const [name, setName] = useState('');

	return (
		<div className='addAuthorWrapper'>
			<h2 className='addAuthorTitle'>Add author</h2>
			<Input
				labelText={AUTHOR_NAME}
				placeholder='Enter author name...'
				createCourseInput='addInput'
				onChange={(event) => setName(event.target.value)}
			/>
			<Button
				buttonText={CREATE_AUTHOR}
				showCourseButtonStyle='showCourseButtonStyle'
				onClick={() => createAuthor(name)}
			/>
		</div>
	);
};

export default AddAuthors;
