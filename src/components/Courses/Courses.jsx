import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import dataFormat from '../../helpers/dataFormat';
import { getAuthors, getCourses } from '../../services';
import { ADD_COURSES, ROUTE_COURSES_ADD, ROUTE_LOGIN } from '../../constants';

import styles from './styles.module.scss';

import getCoursesSelector from '../../store/courses/selectors';
import getAuthorsSelector from '../../store/authors/selectors';
import getUsersSelector from '../../store/user/selectors';

const Courses = () => {
	const userData = useSelector(getUsersSelector);
	const coursesData = useSelector(getCoursesSelector);
	const authorsData = useSelector(getAuthorsSelector);

	const courses = coursesData?.list;
	const availableAuthors = authorsData?.list;
	let navigate = useNavigate();

	useEffect(() => {
		if (!userData.isAuth) {
			navigate(ROUTE_LOGIN);
			return;
		}
	}, [navigate, userData?.isAuth]);

	useEffect(() => {
		debugger;
		if (!availableAuthors || availableAuthors.length === 0) {
			getAuthors();
		}

		if (!courses || courses.length === 0) {
			getCourses('');
		}
	}, []);

	const searchCourses = async (filter) => {
		//const cources = await getCourses(filter);
		await getCourses(filter);
		//store.dispatch({ type: COURSE_TYPES.GET, payload: { filter: filter } });
		//setCourses(cources);
	};

	const onSearch = async (filter) => {
		searchCourses(filter, authorsData.list);
	};

	const getAuthorName = (authorId, authors) => {
		debugger;
		if (authors) {
			const author = authors.find((author) => author.id === authorId);
			if (author) return author.name;
		}
		return '';
	};

	return (
		<>
			<div className={styles.searchBarSection}>
				<SearchBar onSearch={onSearch} />
				<Button
					buttonText={ADD_COURSES}
					onClick={() => navigate(ROUTE_COURSES_ADD)}
					showCourseButtonStyle={styles.button}
				/>
			</div>

			{coursesData?.list?.map(
				({ id, title, description, duration, authors, creationDate }) => {
					return (
						<CourseCard
							key={id}
							title={title}
							description={description}
							duration={dataFormat(duration)}
							authors={authors?.map((authorId) =>
								getAuthorName(authorId, availableAuthors)
							)}
							creationDate={creationDate}
							id={id}
						/>
					);
				}
			)}
			<p>{coursesData?.error}</p>
		</>
	);
};

export default Courses;
