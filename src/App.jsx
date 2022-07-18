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
import CourseForm from './components/CourseForm/CourseForm';
import CourseInfo from './components/CourseInfo/CourseInfo';
import {
	ROUTE_COURSES,
	ROUTE_COURSES_ADD,
	ROUTE_COURSES_UPDATE,
	ROUTE_COURSE_ID,
	ROUTE_LOGIN,
	ROUTE_REGISTRATION,
} from './constants';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
	return (
		<div className='container'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path={ROUTE_REGISTRATION} element={<Registration />} />
					<Route path={ROUTE_LOGIN} element={<Login />} />
					<Route
						path={ROUTE_COURSES}
						element={
							<PrivateRoute>
								<Courses />
							</PrivateRoute>
						}
					/>
					<Route
						path={ROUTE_COURSES_ADD}
						element={
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						}
					/>
					<Route
						path={ROUTE_COURSES_UPDATE}
						element={
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						}
					/>
					<Route
						path={ROUTE_COURSE_ID}
						element={
							<PrivateRoute>
								<CourseInfo />
							</PrivateRoute>
						}
					/>
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
