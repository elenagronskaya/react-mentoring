import { getAllAuthors, getAllCourses, getCoursesFilter, doLogin } from './api';

import store from './store';

import { courseListError, courseListSuccess } from './store/courses/actions';
import AUTHORS_TYPES from './store/authors/types';
import { TOKEN_KEY } from './constants';
import { loginError, loginSuccess } from './store/user/actions';

export const getCourses = async (filter) => {
	try {
		let response = null;
		if (filter === '') {
			response = await getAllCourses();
		} else {
			response = await getCoursesFilter(filter);
		}
		let data = response.data;
		const courses = data.result;

		// courses.map((course) => {
		// 	course.authors = joinAuthors(authors, course.authors);
		// 	return course;
		// });
		store.dispatch(courseListSuccess(courses));
	} catch (err) {
		if (err.response) {
			store.dispatch(courseListError(err.message));
		} else {
			store.dispatch(courseListError('Error sending request to server'));
		}
	}
};

// const joinAuthors = (authors, authorIds) => {
// 	return authorIds.map((authorId) => {
// 		const authorObjs = authors.filter(({ id }) => id === authorId);
// 		if (authorObjs !== null) {
// 			return authorObjs[0].name;
// 		}
// 		return '';
// 	});
// };

export const getAuthors = async () => {
	//const authorsData = useSelector(getAuthorsSelector);

	const authorsResponse = await getAllAuthors();
	const authors = authorsResponse.data.result;
	store.dispatch({ type: AUTHORS_TYPES.LIST_SUCCESS, payload: authors });
};

export const loginUser = async (email, password) => {
	try {
		const response = await doLogin(email, password);
		let data = response.data;
		const token = data.result;
		const userName = data.user.name;
		localStorage.setItem(TOKEN_KEY, token);
		store.dispatch(loginSuccess(userName, email, token));
		return true;
	} catch (err) {
		if (err.response) {
			store.dispatch(loginError(err.response.data.result));
		} else {
			store.dispatch(loginError('Error sending request to server'));
		}
		return false;
	}
};
