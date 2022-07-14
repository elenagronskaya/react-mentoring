import axios from 'axios';
import getHeaders from '../../api';
import BASE_URL from '../../env';

const getAllAuthorsApi = async () => {
	return await axios.get(`${BASE_URL}/authors/all`, {
		headers: getHeaders(),
	});
};

export default getAllAuthorsApi;
