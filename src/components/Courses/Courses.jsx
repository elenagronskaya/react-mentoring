import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import dataFormat from '../../helpers/dataFormat';
import { getCourses } from '../../services/courseService';
import { ADD_COURSES } from '../../constants';
import styles from './styles.module.scss';
import isLoggedIn from '../../helpers/checkLogIn';

const Courses = () => {
	const [courses, setCourses] = useState([]);

	let navigate = useNavigate();

	useEffect(() => {
		if (!isLoggedIn()) {
			navigate('/login');
			return;
		}
	}, [navigate]);

	useEffect(() => {
		searchCourses('');
	}, []);

	const searchCourses = (filter) => {
		const cources = getCourses(filter);
		setCourses(cources);
	};

	const onSearch = (filter) => {
		searchCourses(filter);
	};

	return (
		<>
			<div className={styles.searchBarSection}>
				<SearchBar onSearch={onSearch} />
				<Button
					buttonText={ADD_COURSES}
					onClick={() => navigate('/courses/add')}
					showCourseButtonStyle={styles.button}
				/>
			</div>

			{courses.map(
				({ id, title, description, duration, authors, creationDate }) => {
					return (
						<CourseCard
							key={id}
							title={title}
							description={description}
							duration={dataFormat(duration)}
							authors={authors}
							creationDate={creationDate}
							id={id}
						/>
					);
				}
			)}
		</>
	);
};

export default Courses;
