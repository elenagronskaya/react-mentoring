import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import AuthorItem from '../AuthorItem/AuthorItem';
import AddAuthors from './AddAuthors/AddAuthors';
import AddDuration from './AddDuration/AddDuration';
import CourseAuthors from './CourseAuthors/CourseAuthors';
import styles from './styles.module.scss';
import store from '../../../../store';

import getAuthorsSelector from '../../../../store/authors/selectors';
import { authorCreateSuccess } from '../../../../store/authors/actions';

const CreateAuthors = ({ authors, setAuthors, setDuration, duration }) => {
	const authorsData = useSelector(getAuthorsSelector);

	const [availableAuthors, setAvailableAuthors] = useState();
	useEffect(() => {
		debugger;
		setAvailableAuthors([...authorsData.list]);
	}, []);

	const createAuthor = (name) => {
		const author = { name: name, id: uuidv4() };
		store.dispatch(authorCreateSuccess(author));
		setAvailableAuthors([...availableAuthors, author]);
	};

	const addAuthor = (authorId) => {
		const author = authorsData.list.find((item) => item.id === authorId);
		authors.push({ ...author });
		setAvailableAuthors([
			...availableAuthors.filter((author) => author.id !== authorId),
		]);
		setAuthors([...authors]);
	};

	const deleteAuthor = (authorId) => {
		const author = authorsData.list.find((item) => item.id === authorId);
		setAuthors([...authors.filter((author) => author.id !== authorId)]);
		setAvailableAuthors([...availableAuthors, author]);
	};

	return (
		<section className={styles.createAuthorsSection}>
			<AddAuthors createAuthor={createAuthor} />
			<div>
				<h2 className={styles.addAuthorTitle}>Authors</h2>
				{availableAuthors?.map(({ id, name }) => {
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

CreateAuthors.propTypes = {
	authors: PropTypes.array.isRequired,
	setDuration: PropTypes.func.isRequired,
	setAuthors: PropTypes.func.isRequired,
	duration: PropTypes.number.isRequired,
};

export default CreateAuthors;
