import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import CourseInfo from './components/CourseInfo/CourseInfo';
import {
	ROUTE_COURSES,
	ROUTE_COURSES_ADD,
	ROUTE_COURSE_ID,
	ROUTE_LOGIN,
	ROUTE_REGISTRATION,
} from './constants';

function App() {
	return (
		<div className='container'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path={ROUTE_REGISTRATION} element={<Registration />} />
					<Route path={ROUTE_LOGIN} element={<Login />} />
					<Route path={ROUTE_COURSES} element={<Courses />} />
					<Route path={ROUTE_COURSES_ADD} element={<CreateCourse />} />
					<Route path={ROUTE_COURSE_ID} element={<CourseInfo />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
