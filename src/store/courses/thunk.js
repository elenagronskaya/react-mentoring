import moment from 'moment';
import {
	courseListError,
	courseListSuccess,
	createCourseError,
	createCourseSuccess,
	deleteCourseError,
	deleteCourseSuccess,
	searchCourseResultSuccess,
	selectedCourseError,
	selectedCourseSuccess,
	showCourseError,
	showCourseSuccess,
} from './actions';
import {
	createCourseApi,
	deleteCourseByIdApi,
	getAllCoursesApi,
	getCoursesIdApi,
	updateCourseApi,
} from './api';

export const fillSelectedCourseThunk = (id) => {
	return async function (dispatch) {
		try {
			let course = null;
			if (id) {
				const response = await getCoursesIdApi(id);
				const { data } = response;
				course = data.result;
			} else {
				course = {
					id: null,
					title: '',
					description: '',
					creationDate: moment().format('DD.MM.YYYY'),
					duration: 0,
					authors: [],
				};
			}
			dispatch(selectedCourseSuccess(course));
		} catch (error) {
			if (error.response) {
				dispatch(selectedCourseError(error.message));
			} else {
				dispatch(selectedCourseError('Something is wrong!'));
			}
		}
	};
};

export const getCoursesThunk = () => {
	return async function (dispatch) {
		try {
			const response = await getAllCoursesApi();
			const { data } = response;
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

export const createCourseThunk = (course) => {
	return async function (dispatch) {
		try {
			course.duration = Number(course.duration);
			if (course.id) {
				await updateCourseApi(course.id, course);
			} else {
				await createCourseApi(course);
			}
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

export const getCourseByIdThunk = (id) => {
	return async function (dispatch) {
		try {
			const response = await getCoursesIdApi(id);
			const { data } = response;
			const course = data.result;
			dispatch(showCourseSuccess(course));
		} catch (error) {
			if (error.response) {
				dispatch(showCourseError(error.message));
			} else {
				dispatch(showCourseError('Something is wrong!'));
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
