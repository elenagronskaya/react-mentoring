import axios from 'axios';
import BASE_URL from '../env';

export const doRegistration = async (name, email, password) => {
	let payload = { name, email, password };
	return await axios.post(`${BASE_URL}/register`, payload);
};

export const doLogin = async (email, password) => {
	let payload = { email, password };
	return await axios.post(`${BASE_URL}/login`, payload);
};
