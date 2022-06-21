import React from 'react';
import Button from '../../../../common/Button/Button';
import { ADD_AUTHOR, DELETE_AUTHOR } from '../../../../constants';
import './authorItem.css';

const AuthorItem = ({ name, id, processAuthor, isDelete }) => {
	return (
		<div className='authorItemWrapper'>
			<p className='authorName'>{name}</p>
			<Button
				buttonText={isDelete ? DELETE_AUTHOR : ADD_AUTHOR}
				onClick={() => processAuthor(id)}
			/>
		</div>
	);
};

export default AuthorItem;
