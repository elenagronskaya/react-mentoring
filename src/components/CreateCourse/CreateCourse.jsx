import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import { addCourse } from '../../services/courseService';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import {
	CREATE_COURSE,
	CREATE_COURSE_TITLE,
	ROUTE_COURSES,
	ROUTE_LOGIN,
} from '../../constants';
import CreateAuthors from './components/CreateAuthors/CreateAuthors';
import isLoggedIn from '../../helpers/checkLogIn';
import {
	validateEmptyString,
	validateEmptyList,
	validateMinLength,
} from '../../helpers/validationInputs';
import styles from './styles.module.scss';

const CreateCourse = () => {
	const [courseTitle, setCourseTitle] = useState('');
	const [coursDescription, setCourseDescription] = useState('');
	const [authors, setAuthors] = useState([]);
	const [duration, setDuration] = useState(0);

	let navigate = useNavigate();

	const validate = () => {
		return (
			validateEmptyString(courseTitle) &&
			validateEmptyString(coursDescription) &&
			validateMinLength(coursDescription, 2) &&
			validateEmptyList(authors, 1) &&
			Number(duration) > 0
		);
	};

	const createCourse = () => {
		if (!validate()) {
			alert('Please fill in all fields');
			return;
		}
		const course = {
			id: uuidv4(),
			title: courseTitle,
			description: coursDescription,
			creationDate: moment().format('DD.MM.YYYY'),
			duration: duration,
			authors: authors ? authors.map((item) => item.id) : [],
		};
		addCourse(course);
		navigate(ROUTE_COURSES);
	};

	useEffect(() => {
		if (!isLoggedIn()) {
			navigate(ROUTE_LOGIN);
		}
	}, [navigate]);

	return (
		<section>
			<div>
				<div className={styles.inputWrapper}>
					<Input
						labelText={CREATE_COURSE_TITLE}
						onChange={(event) => setCourseTitle(event.target.value)}
						placeholder='Enter title...'
						createCourseInput={styles.input}
					/>
					<Button buttonText={CREATE_COURSE} onClick={() => createCourse()} />
				</div>
				<label className={styles.label}>
					Description
					<textarea
						className={styles.textarea}
						placeholder='Enter description'
						onChange={(event) => setCourseDescription(event.target.value)}
					/>
				</label>
			</div>
			<div className={styles.createAuthorsWrapper}>
				<CreateAuthors
					authors={authors}
					setAuthors={setAuthors}
					setDuration={setDuration}
					duration={Number(duration)}
				/>
			</div>
		</section>
	);
};

export default CreateCourse;
