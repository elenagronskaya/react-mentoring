import { TOKEN_KEY } from './constants';

const getHeaders = () => {
	return {
		Authorization: localStorage.getItem(TOKEN_KEY) || '',
	};
};

export default getHeaders;
