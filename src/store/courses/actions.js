import COURSE_TYPES from './types';

export const courseListSuccess = (courses) => {
	return { type: COURSE_TYPES.LIST_SUCCESS, payload: courses };
};

export const searchCourseResultSuccess = (course) => {
	return { type: COURSE_TYPES.SEARCH_RESULT_SUCCESS, payload: course };
};

export const createCourseSuccess = (course) => {
	return { type: COURSE_TYPES.CREATE_SUCCESS, payload: course };
};

export const showCourseSuccess = (course) => {
	return { type: COURSE_TYPES.SHOW_SUCCESS, payload: course };
};

export const deleteCourseSuccess = (courseId) => {
	return { type: COURSE_TYPES.DELETE_SUCCESS, payload: courseId };
};

export const courseListError = (errorText) => {
	return { type: COURSE_TYPES.LIST_ERROR, error: errorText };
};
export const showCourseError = (errorText) => {
	return { type: COURSE_TYPES.SHOW_ERROR, error: errorText };
};
