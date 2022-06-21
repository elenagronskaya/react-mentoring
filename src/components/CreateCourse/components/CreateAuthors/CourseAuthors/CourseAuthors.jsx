import React from 'react';
import AuthorItem from '../../AuthorItem/AuthorItem';
import './courseAuthors.css';

const CourseAuthors = ({ authors, processAuthor }) => {
	const isEmptyAuthorList = !authors || authors.length === 0;

	return (
		<div className='addAuthorWrapper'>
			<p className='addAuthorTitle'>Course authors</p>
			{isEmptyAuthorList ? (
				<p className='textEmptyList'>Author list is empty</p>
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

export default CourseAuthors;
