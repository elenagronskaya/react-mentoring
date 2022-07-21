import { authorCreateSuccess, authorListSuccess } from './actions';
import { createAuthorsApi, getAllAuthorsApi } from './api';

export const authorCreateThunk = (name) => {
	return async function (dispatch) {
		try {
			const authorsResponse = await createAuthorsApi({ name });
			const author = authorsResponse.data.result;
			dispatch(authorCreateSuccess(author));
		} catch (error) {
			if (error.response) {
				dispatch.authorCreateError(error.message);
			} else {
				dispatch.authorCreateError('Something is wrong!');
			}
		}
	};
};
export const getAuthorsThunk = () => {
	return async function (dispatch) {
		try {
			const authorsResponse = await getAllAuthorsApi();
			const authors = authorsResponse.data.result;
			dispatch(authorListSuccess(authors));
		} catch (error) {
			if (error.response) {
				dispatch.authorListError(error.message);
			} else {
				dispatch.authorListError('Something wrong!');
			}
		}
	};
};
