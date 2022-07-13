import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import dataFormat from '../../helpers/dataFormat';
import { getAuthors, getCourses, searchCourses } from '../../services';
import { ADD_COURSES, ROUTE_COURSES_ADD, ROUTE_LOGIN } from '../../constants';
import getCoursesSelector from '../../store/courses/selectors';
import getAuthorsSelector from '../../store/authors/selectors';
import getUsersSelector from '../../store/user/selectors';
import getAuthorName from '../../helpers/getAuthorName';
import styles from './styles.module.scss';
import getCurrentUser from '../../store/user/thunk';
import store from '../../store';

const Courses = () => {
	const userData = useSelector(getUsersSelector);
	const coursesData = useSelector(getCoursesSelector);
	const authorsData = useSelector(getAuthorsSelector);

	const allCourses = coursesData?.list;
	const searchResult = coursesData?.searchResult;
	const availableAuthors = authorsData?.list;
	const navigate = useNavigate();

	useEffect(() => {
		if (userData.isAuth) {
			store.dispatch(getCurrentUser());
		} else {
			navigate(ROUTE_LOGIN);
		}
	}, [navigate, userData.isAuth]);

	useEffect(() => {
		if (!availableAuthors) {
			getAuthors();
		}

		if (!allCourses) {
			getCourses();
		} else {
			searchCourses(allCourses, '');
		}
	}, [allCourses, availableAuthors]);

	const onSearch = (filter) => {
		searchCourses(allCourses, filter);
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

			{searchResult?.map(
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
			<p className={styles.error}>{coursesData?.error}</p>
		</>
	);
};

export default Courses;
