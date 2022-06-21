import React, { useEffect, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import dataFormat from '../../helpers/dataFormat';
import { getCourses } from '../../services/courseService';
import { ADD_COURSES } from '../../constants';
import './courses.css';

const Courses = ({ setIsAddingCourse }) => {
	const [courses, setCourses] = useState([]);

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
			<div className='searchBarSection'>
				<SearchBar onSearch={onSearch} />
				<Button
					buttonText={ADD_COURSES}
					onClick={() => setIsAddingCourse(true)}
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
						/>
					);
				}
			)}
		</>
	);
};

export default Courses;
