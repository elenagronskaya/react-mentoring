import axios from 'axios';
import getHeaders from '../../api';
import BASE_URL from '../../env';

export const getAllCoursesApi = async () => {
	return await axios.get(`${BASE_URL}/courses/all`, {
		headers: getHeaders(),
	});
};

export const getCoursesIdApi = async (id) => {
	return await axios.get(`${BASE_URL}/courses/${id}`, {
		headers: getHeaders(),
	});
};

export const createCourseApi = async (course) => {
	return await axios.post(`${BASE_URL}/courses/add`, course, {
		headers: getHeaders(),
	});
};

export const deleteCourseByIdApi = async (id) => {
	return await axios.delete(`${BASE_URL}/courses/${id}`, {
		headers: getHeaders(),
	});
};
