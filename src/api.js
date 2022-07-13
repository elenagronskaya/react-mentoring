import axios from 'axios';
import { TOKEN_KEY } from './constants';
import BASE_URL from './env';
const getHeaders = () => {
	return {
		Authorization: localStorage.getItem(TOKEN_KEY) || '',
	};
};
export const getAllCourses = async () => {
	return await axios.get(`${BASE_URL}/courses/all`, {
		headers: getHeaders(),
	});
};

export const getCoursesId = async (id) => {
	return await axios.get(`${BASE_URL}/courses/${id}`, {
		headers: getHeaders(),
	});
};

export const getAllAuthors = async () => {
	return await axios.get(`${BASE_URL}/authors/all`, {
		headers: getHeaders(),
	});
};

export const doRegistration = async (name, email, password) => {
	let payload = { name, email, password };
	return await axios.post(`${BASE_URL}/register`, payload);
};

export const doLogin = async (email, password) => {
	let payload = { email, password };
	return await axios.post(`${BASE_URL}/login`, payload);
};

export const getUserMe = async () => {
	return await axios.get(`${BASE_URL}/users/me`, {
		headers: getHeaders(),
	});
};
