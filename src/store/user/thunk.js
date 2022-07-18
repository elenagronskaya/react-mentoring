import {
	getUserMeSuccess,
	loginError,
	loginSuccess,
	logoutError,
	logoutUser,
} from './actions';
import { doLoginApi, getUserMeApi, logoutUserApi } from './api';

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

export const loginUserThunk = (email, password) => {
	return async function (dispatch) {
		try {
			const response = await doLoginApi(email, password);
			const { data } = response;
			const token = data.result;
			const userName = data.user.name || email;
			dispatch(loginSuccess(userName, email, token));
			return true;
		} catch (err) {
			if (err.response) {
				dispatch(loginError(err.response.data.result));
			} else {
				dispatch(loginError('Error sending request to server'));
			}
			return false;
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
