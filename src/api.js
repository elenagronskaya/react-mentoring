import axios from 'axios';
import BASE_URL from './env';

export const getAllCourses = async () => {
	return await axios.get(`${BASE_URL}/courses/all`);
};

export const getCoursesFilter = async (filter) => {
	return await axios.get(`${BASE_URL}/courses/filter?title=${filter}`);
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
