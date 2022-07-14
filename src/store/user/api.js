import axios from 'axios';
import getHeaders from '../../api';
import BASE_URL from '../../env';

export const doRegistrationApi = async (name, email, password) => {
	let payload = { name, email, password };
	return await axios.post(`${BASE_URL}/register`, payload);
};

export const doLoginApi = async (email, password) => {
	let payload = { email, password };
	return await axios.post(`${BASE_URL}/login`, payload);
};

export const logoutUserApi = async () => {
	return await axios.delete(`${BASE_URL}/logout`, {
		headers: getHeaders(),
	});
};

export const getUserMeApi = async () => {
	return await axios.get(`${BASE_URL}/users/me`, {
		headers: getHeaders(),
	});
};
