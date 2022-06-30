import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { addCourse } from '../../services/courseService';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { v4 as uuidv4 } from 'uuid';
import { CREATE_COURSE, CREATE_COURSE_TITLE } from '../../constants';
import CreateAuthors from './components/CreateAuthors/CreateAuthors';
import { useNavigate } from 'react-router-dom';
import isLoggedIn from '../../helpers/checkLogIn';
import {
	validateEmptyString,
	validateEmptyList,
	validateMinLength,
} from '../../helpers/validationInputs';
import styles from './styles.module.scss';

const CreateCourse = () => {
	let navigate = useNavigate();
	const [courseTitle, setCourseTitle] = useState('');
	const [coursDescription, setCourseDescription] = useState('');
	const [authors, setAuthors] = useState([]);
	const [duration, setDuration] = useState(0);

	const validate = () => {
		return (
			validateEmptyString(courseTitle) &&
			validateEmptyString(coursDescription) &&
			validateMinLength(coursDescription, 2) &&
			validateEmptyList(authors, 1) &&
			Number(duration) > 0
		);
	};
	useEffect(() => {
		if (!isLoggedIn()) {
			navigate('/login');
			return;
		}
	}, [navigate]);

	const createCourse = () => {
		debugger;
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
		navigate('/courses');
	};

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
					duration={duration}
				/>
			</div>
		</section>
	);
};

export default CreateCourse;
