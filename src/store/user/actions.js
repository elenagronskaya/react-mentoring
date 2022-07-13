import USER_TYPES from './types';

export const loginSuccess = (userName, email, token) => {
	return {
		type: USER_TYPES.LOGIN_SUCCESS,
		payload: { userName, email, token },
	};
};

export const logoutUser = () => {
	return {
		type: USER_TYPES.LOGIN_LOGOUT,
	};
};

export const loginError = (errorText) => {
	return { type: USER_TYPES.LOGIN_ERROR, payload: errorText };
};
