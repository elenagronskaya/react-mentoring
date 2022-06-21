import React, { useState } from 'react';
import { mockedCoursesList } from '../../mocked-data';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { v4 as uuidv4 } from 'uuid';
import './createCourse.css';

import { CREATE_COURSE, CREATE_COURSE_TITLE } from '../../constants';
import CreateAuthors from './components/CreateAuthors/CreateAuthors';

const CreateCourse = ({ setIsAddingCourse }) => {
	const [courseTitle, setCourseTitle] = useState('');
	const [coursDescription, setCourseDescription] = useState('');
	const [authors, setAuthors] = useState([]);
	const [duration, setDuration] = useState(0);

	const createCourse = () => {
		const course = {
			id: uuidv4(),
			title: courseTitle,
			description: coursDescription,
			creationDate: '08.03.2021',
			duration: duration,
			authors: authors ? authors.map((item) => item.id) : [],
		};
		mockedCoursesList.push(course);
		setIsAddingCourse(false);
	};

	return (
		<section>
			<div>
				<div className='inputWrapper'>
					<Input
						labelText={CREATE_COURSE_TITLE}
						onChange={(event) => setCourseTitle(event.target.value)}
						placeholder='Enter title...'
					/>
					<Button buttonText={CREATE_COURSE} onClick={() => createCourse()} />
				</div>
				<label className='label'>
					Description
					<textarea
						className='textarea'
						placeholder='Enter description'
						onChange={(event) => setCourseDescription(event.target.value)}
					/>
				</label>
			</div>
			<div className='createAuthorsWrapper'>
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
