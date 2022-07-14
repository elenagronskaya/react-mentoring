import store from './store';
import {
	searchCourseResultSuccess,
	showCourseError,
	showCourseSuccess,
} from './store/courses/actions';
import { loginError, loginSuccess } from './store/user/actions';

import { getCoursesIdApi } from './store/courses/api';

import { doLoginApi } from './store/user/api';

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
		response = await getCoursesIdApi(id);
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

export const loginUser = async (email, password) => {
	try {
		const response = await doLoginApi(email, password);
		let data = response.data;
		const token = data.result;
		const userName = data.user.name || email;
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
