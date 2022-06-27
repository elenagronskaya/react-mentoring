import React, { useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	const [isAddingCourse, setIsAddingCourse] = useState(false);
	return (
		<div className='container'>
			<Header />
			{isAddingCourse ? (
				<CreateCourse setIsAddingCourse={setIsAddingCourse} />
			) : (
				<Courses setIsAddingCourse={setIsAddingCourse} />
			)}
		</div>
	);
}

export default App;
