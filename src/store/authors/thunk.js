import { authorListSuccess } from './actions';
import getAllAuthorsApi from './api';

const getAuthorsThunk = () => {
	return async function (dispatch) {
		const authorsResponse = await getAllAuthorsApi();
		const authors = authorsResponse.data.result;
		dispatch(authorListSuccess(authors));
	};
};

export default getAuthorsThunk;
