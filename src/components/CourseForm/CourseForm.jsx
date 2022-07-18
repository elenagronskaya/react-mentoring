import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import {
	CREATE_COURSE,
	CREATE_COURSE_TITLE,
	UPDATE_COURSE,
	ROUTE_COURSES,
	ROUTE_LOGIN,
} from '../../constants';
import CreateAuthors from './components/CreateAuthors/CreateAuthors';
import {
	validateEmptyString,
	validateEmptyList,
	validateMinLength,
} from '../../helpers/validationInputs';
import store from '../../store';
import getUsersSelector from '../../store/user/selectors';
import {
	createCourseThunk,
	fillSelectedCourseThunk,
} from '../../store/courses/thunk';
import getCoursesSelector from '../../store/courses/selectors';
import { setSelectedCourseProperty } from '../../store/courses/actions';
import styles from './styles.module.scss';

const CreateForm = () => {
	const { courseId } = useParams();
	const navigate = useNavigate();

	const userData = useSelector(getUsersSelector);
	const coursesData = useSelector(getCoursesSelector);
	const { selectedCourse } = coursesData;

	const validate = () => {
		return (
			validateEmptyString(selectedCourse.title) &&
			validateEmptyString(selectedCourse.description) &&
			validateMinLength(selectedCourse.description, 2) &&
			validateEmptyList(selectedCourse.authors, 1) &&
			Number(selectedCourse.duration) > 0
		);
	};

	const createCourse = () => {
		if (!validate()) {
			alert('Please fill in all fields');
			return;
		}

		store.dispatch(createCourseThunk({ ...selectedCourse }));
		navigate(ROUTE_COURSES);
	};

	const setValueByName = (name, value) => {
		store.dispatch(setSelectedCourseProperty(name, value));
	};

	const setValue = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setValueByName(name, value);
	};

	useEffect(() => {
		store.dispatch(fillSelectedCourseThunk(courseId));
	}, [courseId]);

	useEffect(() => {
		if (!userData.isAuth) {
			navigate(ROUTE_LOGIN);
		}
	}, [navigate, userData.isAuth]);

	return (
		<section>
			<p className={styles.error}>{coursesData?.error}</p>
			<div>
				<div className={styles.inputWrapper}>
					<Input
						name='title'
						labelText={CREATE_COURSE_TITLE}
						onChange={(event) => setValue(event)}
						placeholder='Enter title...'
						value={selectedCourse?.title || ''}
						createCourseInput={styles.input}
					/>
					<Button
						buttonText={courseId ? UPDATE_COURSE : CREATE_COURSE}
						onClick={() => createCourse()}
					/>
				</div>
				<label className={styles.label}>
					Description
					<textarea
						name='description'
						className={styles.textarea}
						placeholder='Enter description'
						value={selectedCourse?.description || ''}
						onChange={(event) => setValue(event)}
					/>
				</label>
			</div>
			<div className={styles.createAuthorsWrapper}>
				<CreateAuthors
					authors={selectedCourse?.authors || []}
					setAuthors={(value) => {
						setValueByName('authors', value);
					}}
					setDuration={(value) => {
						setValueByName('duration', value);
					}}
					duration={selectedCourse?.duration || ''}
				/>
			</div>
		</section>
	);
};

export default CreateForm;
