import {
	courseListError,
	courseListSuccess,
	createCourseError,
	createCourseSuccess,
	deleteCourseError,
	deleteCourseSuccess,
	searchCourseResultSuccess,
} from './actions';
import { createCourseApi, deleteCourseByIdApi, getAllCoursesApi } from './api';

export const getCoursesThunk = () => {
	return async function (dispatch) {
		try {
			const response = await getAllCoursesApi();

			let data = response.data;
			const courses = data.result;
			dispatch(courseListSuccess(courses));
			dispatch(searchCourseResultSuccess(courses));
		} catch (err) {
			if (err.response) {
				dispatch(courseListError(err.message));
			} else {
				dispatch(courseListError('Error sending request to server'));
			}
		}
	};
};

export const deleteCourseByIdThunk = (id) => {
	return async function (dispatch) {
		try {
			await deleteCourseByIdApi(id);
			dispatch(deleteCourseSuccess(id));
		} catch (error) {
			if (error.response) {
				dispatch(deleteCourseError(error.message));
			} else {
				dispatch(deleteCourseError('Error sending request to server'));
			}
		}
	};
};

export const createCourseThunk = (course) => {
	return async function (dispatch) {
		try {
			await createCourseApi(course);
			dispatch(createCourseSuccess(course));
		} catch (error) {
			if (error.response) {
				dispatch(createCourseError(error.message));
			} else {
				dispatch(createCourseError('Something is wrong!'));
			}
		}
	};
};
