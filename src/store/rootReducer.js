import { combineReducers } from 'redux';

import authorReducer from './authors/reducer';
import coursesReducer from './courses/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorReducer,
	user: userReducer,
});

export default rootReducer;
