import axios from 'axios';
import BASE_URL from './env';

export const getAllCourses = async () => {
	return await axios.get(`${BASE_URL}/courses/all`);
};

export const getCoursesId = async (id) => {
	return await axios.get(`${BASE_URL}/courses/${id}`);
};

export const getAllAuthors = async () => {
	return await axios.get(`${BASE_URL}/authors/all`);
};

export const doRegistration = async (name, email, password) => {
	let payload = { name, email, password };
	return await axios.post(`${BASE_URL}/register`, payload);
};

export const doLogin = async (email, password) => {
	let payload = { email, password };
	return await axios.post(`${BASE_URL}/login`, payload);
};
