import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import AuthorItem from '../AuthorItem/AuthorItem';
import AddAuthors from './AddAuthors/AddAuthors';
import AddDuration from './AddDuration/AddDuration';
import CourseAuthors from './CourseAuthors/CourseAuthors';
import getAuthorsSelector from '../../../../store/authors/selectors';
import store from '../../../../store';
import {
	authorCreateThunk,
	getAuthorsThunk,
} from '../../../../store/authors/thunk';
import styles from './styles.module.scss';

const CreateAuthors = ({ authors, setAuthors, setDuration, duration }) => {
	const authorsData = useSelector(getAuthorsSelector);

	const [availableAuthors, setAvailableAuthors] = useState();

	useEffect(() => {
		store.dispatch(getAuthorsThunk());
	}, []);

	useEffect(() => {
		setAvailableAuthors([
			...authorsData.list?.filter(
				({ id }) => !authors?.find((courseAuthorId) => courseAuthorId === id)
			),
		]);
	}, [authors, authorsData.list]);

	const createAuthor = (name) => {
		store.dispatch(authorCreateThunk(name));
	};

	const addAuthor = (authorId) => {
		const author = authorsData.list.find((item) => item.id === authorId);
		authors.push(author.id);

		setAuthors([...authors]);
	};

	const deleteAuthor = (authorId) => {
		setAuthors([...authors.filter((id) => id !== authorId)]);
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
			<CourseAuthors
				processAuthor={deleteAuthor}
				authors={authors}
				allAuthors={authorsData.list}
			/>
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
