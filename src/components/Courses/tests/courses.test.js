import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { setupStore } from '../../../store';
import Courses from '../Courses';

import { mockedAuthorsList, mockedCoursesList } from './mockdata';
import { ADD_COURSES, ROLE_ADMIN } from '../../../constants';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
		role: ROLE_ADMIN,
	},
	courses: { list: mockedCoursesList, searchResult: mockedCoursesList },
	authors: { list: mockedAuthorsList },
};

const store = setupStore(mockedState);

const Wrapper = ({ children }) => (
	<Provider store={store}>
		<Router>{children}</Router>
	</Provider>
);

describe(Courses, () => {
	it('should display amount of CourseCard', async () => {
		render(<Courses />, { wrapper: Wrapper });

		screen.getAllByTestId('courseTestId');

		expect(screen.getAllByTestId('courseTestId').length).toBe(
			mockedCoursesList.length
		);
	});
	it('CourseForm should be shown after a click on the "Add new course" button.', async () => {
		render(<Courses />, { wrapper: Wrapper });

		const addCourseButton = screen.getByText(ADD_COURSES);
		expect(addCourseButton).toBeTruthy();
		fireEvent.click(addCourseButton);
		screen.debug();
	});
});
