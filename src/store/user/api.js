import axios from 'axios';
import getHeaders from '../../api';

export const doRegistrationApi = async (name, email, password) => {
	let payload = { name, email, password };
	return await axios.post(
		`${process.env.REACT_APP_API_BASE_URL}/register`,
		payload
	);
};

export const doLoginApi = async (email, password) => {
	let payload = { email, password };
	return await axios.post(
		`${process.env.REACT_APP_API_BASE_URL}/login`,
		payload
	);
};

export const logoutUserApi = async () => {
	return await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/logout`, {
		headers: getHeaders(),
	});
};

export const getUserMeApi = async () => {
	return await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/me`, {
		headers: getHeaders(),
	});
};
