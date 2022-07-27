import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: [thunk],
	devTools: true,
});

//for tests
export const setupStore = (preloadedState) => {
	return configureStore({
		reducer: rootReducer,
		middleware: [thunk],
		preloadedState,
	});
};
