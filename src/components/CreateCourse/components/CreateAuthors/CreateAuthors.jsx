import React, { useEffect, useState } from 'react';
import { mockedAuthorsList } from '../../../../mocked-data';
import AuthorItem from '../AuthorItem/AuthorItem';
import AddAuthors from './AddAuthors/AddAuthors';
import AddDuration from './AddDuration/AddDuration';
import CourseAuthors from './CourseAuthors/CourseAuthors';
import { getAuthors, getAuthorById } from '../../../../services/courseService';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.scss';

const CreateAuthors = ({ authors, setAuthors, setDuration, duration }) => {
	const [availableAuthors, setAvailableAuthors] = useState([]);

	useEffect(() => {
		setAvailableAuthors(getAuthors());
	}, []);

	const createAuthor = (name) => {
		const author = { name: name, id: uuidv4() };
		mockedAuthorsList.push(author);
		setAvailableAuthors([...availableAuthors, author]);
	};

	const addAuthor = (authorId) => {
		const author = getAuthorById(authorId);
		authors.push({ ...author });
		setAvailableAuthors([
			...availableAuthors.filter((author) => author.id !== authorId),
		]);
		setAuthors([...authors]);
	};

	const deleteAuthor = (authorId) => {
		const author = getAuthorById(authorId);
		setAuthors([...authors.filter((author) => author.id !== authorId)]);
		setAvailableAuthors([...availableAuthors, author]);
	};

	return (
		<section className={styles.createAuthorsSection}>
			<AddAuthors createAuthor={createAuthor} />
			<div>
				<h2 className={styles.addAuthorTitle}>Authors</h2>
				{availableAuthors.map(({ id, name }) => {
					return (
						<AuthorItem
							key={id}
							id={id}
							name={name}
							processAuthor={addAuthor}
						/>
					);
				})}
			</div>
			<AddDuration duration={duration} setDuration={setDuration} />
			<CourseAuthors processAuthor={deleteAuthor} authors={authors} />
		</section>
	);
};

export default CreateAuthors;