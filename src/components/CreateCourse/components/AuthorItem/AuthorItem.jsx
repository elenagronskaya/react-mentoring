import React from 'react';
import PropTypes from 'prop-types';

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

AuthorItem.propTypes = {
	name: PropTypes.string.isRequired,
	isDelete: PropTypes.bool,
	processAuthor: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
};
AuthorItem.defaultProps = {
	type: 'button',
	showCourseButtonStyle: styles.button,
	isDelete: false,
};

export default AuthorItem;
