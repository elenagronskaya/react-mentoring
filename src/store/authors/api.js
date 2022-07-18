import axios from 'axios';
import getHeaders from '../../api';
import BASE_URL from '../../env';

export const getAllAuthorsApi = async () => {
	return await axios.get(`${BASE_URL}/authors/all`, {
		headers: getHeaders(),
	});
};

export const createAuthorsApi = async (author) => {
	return await axios.post(`${BASE_URL}/authors/add`, author, {
		headers: getHeaders(),
	});
};
