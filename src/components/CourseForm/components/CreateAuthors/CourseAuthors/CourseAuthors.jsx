import React from 'react';
import PropTypes from 'prop-types';

import AuthorItem from '../../AuthorItem/AuthorItem';
import styles from './styles.module.scss';

const CourseAuthors = ({ authors, processAuthor, allAuthors }) => {
	const isEmptyAuthorList = !authors || authors.length === 0;

	const getAuthorNameById = (authorId) => {
		return allAuthors?.find(({ id }) => id === authorId)?.name || '';
	};
	return (
		<div className={styles.addAuthorWrapper}>
			<h2 className={styles.addAuthorTitle}>Course authors</h2>
			{isEmptyAuthorList ? (
				<p className={styles.textEmptyList}>Author list is empty</p>
			) : (
				<>
					{authors.map((id) => {
						return (
							<AuthorItem
								key={`author-${id}`}
								id={id}
								isDelete
								processAuthor={processAuthor}
								name={getAuthorNameById(id)}
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
	processAuthor: PropTypes.func.isRequired,
	allAuthors: PropTypes.array,
};

CourseAuthors.defaultProps = { authors: [] };

export default CourseAuthors;
