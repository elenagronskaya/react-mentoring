import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import Header from '../Header';

import { setupStore } from '../../../store';

// jest.mock('./api', () => ({
// 	getUserData: () => ({ name: 'mock name' }),
// }));
//const mockedUserName = 'mock name';
const initialState = {
	user: { name: 'mock name' /* mockedUserName*/ },
};

const store = setupStore(initialState);

const Wrapper = ({ children }) => (
	<Provider store={store}>
		<Router>{children}</Router>
	</Provider>
);

describe('Header', () => {
	it('should display user name', async () => {
		render(<Header />, { wrapper: Wrapper });

		const userName = await screen.findByText('mock name' /*mockedUserName*/);

		expect(userName).toBeTruthy();
	});
});

describe('Logo', () => {
	test('Logo must have src = "logo.png" and alt = "logo"', () => {
		render(<Header />, { wrapper: Wrapper });
		const logo = screen.getByRole('img');
		expect(logo).toBeTruthy();
		expect(logo).toHaveAttribute('alt', 'logo');

		expect(logo).toHaveAttribute('src', 'logo.png');
	});
});
