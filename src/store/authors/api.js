import axios from 'axios';
import getHeaders from '../../api';

export const getAllAuthorsApi = async () => {
	return await axios.get(`${process.env.REACT_APP_API_BASE_URL}/authors/all`, {
		headers: getHeaders(),
	});
};

export const createAuthorsApi = async (author) => {
	return await axios.post(
		`${process.env.REACT_APP_API_BASE_URL}/authors/add`,
		author,
		{
			headers: getHeaders(),
		}
	);
};
