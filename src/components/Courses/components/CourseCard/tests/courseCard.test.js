import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import CourseCard from '../CourseCard';

import { setupStore } from '../../../../../store';
import { ROLE_ADMIN } from '../../../../../constants';

const initialState = {
	user: { role: ROLE_ADMIN },
};

const store = setupStore(initialState);

const Wrapper = ({ children }) => (
	<Provider store={store}>
		<Router>{children}</Router>
	</Provider>
);
const mockedTitleText = 'title';
const mockedDescriptionText = 'description';
const mockedAuthorsArray = ['Holmes', 'Watson', 'Hadson'];
const mockedDurationInMinutes = 121;
const mockedDurationText = '02:01 hours';
const mockedCreationDate = new Date('2022/07/01');
const mockedCreationDateText = mockedCreationDate.toString('YYYY-MM-DD');
const mockedId = '111';

describe('Course Card', () => {
	it('should display title, description, authors, duration, creationDate, id', async () => {
		render(
			<CourseCard
				title={mockedTitleText}
				description={mockedDescriptionText}
				authors={mockedAuthorsArray}
				duration={mockedDurationInMinutes}
				creationDate={mockedCreationDateText}
				id={mockedId}
			/>,
			{ wrapper: Wrapper }
		);

		const courseTitle = await screen.findByTestId('titleId');
		const courseDescription = await screen.findByTestId('descriptionId');
		const courseAuthors = await screen.findByTestId('authorsId');
		const courseDuration = await screen.findByTestId('durationId');
		const courseCreationDate = await screen.findByTestId('creationDateId');

		expect(courseTitle).toBeTruthy();
		expect(courseDescription).toBeTruthy();
		expect(courseAuthors).toBeTruthy();
		expect(courseDuration).toBeTruthy();
		expect(courseCreationDate).toBeTruthy();

		expect(courseTitle).toHaveTextContent(mockedTitleText);
		expect(courseDescription).toHaveTextContent(mockedDescriptionText);

		mockedAuthorsArray.forEach((authorName) => {
			const re = new RegExp(`.*${authorName}.*`);
			expect(courseAuthors).toHaveTextContent(re);
		});

		expect(courseDuration).toHaveTextContent(mockedDurationText);
		expect(courseCreationDate).toHaveTextContent(mockedCreationDateText);
	});
});
