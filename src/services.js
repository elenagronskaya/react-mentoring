import { getAllAuthors, getAllCourses, doLogin, getCoursesId } from './api';
import store from './store';
import {
	courseListError,
	courseListSuccess,
	searchCourseResultSuccess,
	showCourseError,
	showCourseSuccess,
} from './store/courses/actions';
import { TOKEN_KEY } from './constants';
import { loginError, loginSuccess } from './store/user/actions';
import { authorListSuccess } from './store/authors/actions';

export const getCourses = async () => {
	try {
		const response = await getAllCourses();

		let data = response.data;
		const courses = data.result;
		store.dispatch(courseListSuccess(courses));
		store.dispatch(searchCourseResultSuccess(courses));
	} catch (err) {
		if (err.response) {
			store.dispatch(courseListError(err.message));
		} else {
			store.dispatch(courseListError('Error sending request to server'));
		}
	}
};

export const searchCourses = (allCourses, filter) => {
	const courses = allCourses.filter(
		(item) =>
			filter == null ||
			filter === '' ||
			item.title.toLowerCase().includes(filter.toLowerCase()) ||
			item.id.toLowerCase().includes(filter.toLowerCase())
	);
	store.dispatch(searchCourseResultSuccess(courses));
};

export const getCourseById = async (id) => {
	try {
		let response = null;
		response = await getCoursesId(id);
		let data = response.data;
		const course = data.result;
		store.dispatch(showCourseSuccess(course));
	} catch (error) {
		if (error.response) {
			store.dispatch(showCourseError(error.message));
		} else {
			store.dispatch(showCourseError('Something is wrong!'));
		}
	}
};

export const getAuthors = async () => {
	const authorsResponse = await getAllAuthors();
	const authors = authorsResponse.data.result;
	store.dispatch(authorListSuccess(authors));
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
