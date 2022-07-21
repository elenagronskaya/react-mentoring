import axios from 'axios';
import getHeaders from '../../api';

export const getAllCoursesApi = async () => {
	return await axios.get(`${process.env.REACT_APP_API_BASE_URL}/courses/all`, {
		headers: getHeaders(),
	});
};

export const getCoursesIdApi = async (id) => {
	return await axios.get(
		`${process.env.REACT_APP_API_BASE_URL}/courses/${id}`,
		{
			headers: getHeaders(),
		}
	);
};

export const createCourseApi = async (course) => {
	return await axios.post(
		`${process.env.REACT_APP_API_BASE_URL}/courses/add`,
		course,
		{
			headers: getHeaders(),
		}
	);
};

export const updateCourseApi = async (id, course) => {
	return await axios.put(
		`${process.env.REACT_APP_API_BASE_URL}/courses/${id}`,
		course,
		{
			headers: getHeaders(),
		}
	);
};

export const deleteCourseByIdApi = async (id) => {
	return await axios.delete(
		`${process.env.REACT_APP_API_BASE_URL}/courses/${id}`,
		{
			headers: getHeaders(),
		}
	);
};
