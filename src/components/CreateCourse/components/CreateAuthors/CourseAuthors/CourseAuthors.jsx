import React from 'react';
import AuthorItem from '../../AuthorItem/AuthorItem';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const CourseAuthors = ({ authors, processAuthor }) => {
	const isEmptyAuthorList = !authors || authors.length === 0;

	return (
		<div className={styles.addAuthorWrapper}>
			<h2 className={styles.addAuthorTitle}>Course authors</h2>
			{isEmptyAuthorList ? (
				<p className={styles.textEmptyList}>Author list is empty</p>
			) : (
				<>
					{authors.map(({ name, id }) => {
						return (
							<AuthorItem
								key={id}
								id={id}
								isDelete
								processAuthor={processAuthor}
								name={name}
							/>
						);
					})}
				</>
			)}
		</div>
	);
};

CourseAuthors.propTypes = {
	authors: PropTypes.array,
	processAuthor: PropTypes.func,
};

export default CourseAuthors;
