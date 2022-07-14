import { getUserMeSuccess, logoutError, logoutUser } from './actions';
import { getUserMeApi, logoutUserApi } from './api';

export const getCurrentUserThunk = () => {
	return async function (dispatch) {
		try {
			const response = await getUserMeApi();
			const user = response.data.result;

			dispatch(
				getUserMeSuccess(user.name || user.email, user.email, user.role)
			);
		} catch (err) {
			dispatch(logoutUser());
		}
	};
};

export const logoutUserThunk = () => {
	return async function (dispatch) {
		try {
			await logoutUserApi();
			dispatch(logoutUser());
		} catch (error) {
			dispatch(logoutError('Something is wrong!'));
		}
	};
};
