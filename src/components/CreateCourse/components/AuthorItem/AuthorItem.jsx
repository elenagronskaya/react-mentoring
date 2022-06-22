import React from 'react';
import Button from '../../../../common/Button/Button';
import { ADD_AUTHOR, DELETE_AUTHOR } from '../../../../constants';
import styles from './styles.module.scss';

const AuthorItem = ({ name, id, processAuthor, isDelete }) => (
	<div className={styles.authorItemWrapper}>
		<p className={styles.authorName}>{name}</p>
		<Button
			buttonText={isDelete ? DELETE_AUTHOR : ADD_AUTHOR}
			onClick={() => processAuthor(id)}
		/>
	</div>
);

export default AuthorItem;
