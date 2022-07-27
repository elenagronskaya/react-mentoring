import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { setupStore } from '../../../store';
import Courses from '../Courses';
import { mockedAuthorsList, mockedCoursesList } from './mockdata';
import { ADD_COURSES, ROLE_ADMIN, ROUTE_COURSES_ADD } from '../../../constants';

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

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));
const Wrapper = ({ children }) => (
	<Provider store={store}>
		<Router>{children}</Router>
	</Provider>
);

const WrapperWithMemoryRoute = ({ children }) => (
	<Provider store={store}>
		<MemoryRouter>{children}</MemoryRouter>
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
});

describe(Courses, () => {
	it('CourseForm should be shown after a click on the "Add new course" button.', () => {
		render(<Courses />, { wrapper: WrapperWithMemoryRoute });

		const addCourseButton = screen.getByText(ADD_COURSES);
		expect(addCourseButton).toBeTruthy();
		fireEvent.click(addCourseButton);
		expect(mockedUsedNavigate).toHaveBeenCalledWith(ROUTE_COURSES_ADD);
	});
});
