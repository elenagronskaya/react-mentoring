import COURSE_TYPES from './types';

export const courseListSuccess = (filter) => {
	return { type: COURSE_TYPES.LIST_SUCCESS, payload: filter };
};

export const createCourseSuccess = (course) => {
	return { type: COURSE_TYPES.CREATE_SUCCESS, payload: course };
};

export const deleteCourseSuccess = (courseId) => {
	return { type: COURSE_TYPES.DELETE_SUCCESS, payload: courseId };
};

export const courseListError = (errorText) => {
	return { type: COURSE_TYPES.LIST_SUCCESS, error: errorText };
};
