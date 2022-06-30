import axios from 'axios';

export const doRegistration = async (name, email, password) => {
	let payload = { name, email, password };
	return await axios.post('http://localhost:4000/register', payload);
};

export const doLogin = async (email, password) => {
	let payload = { email, password };
	return await axios.post('http://localhost:4000/login', payload);
};
