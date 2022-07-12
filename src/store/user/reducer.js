import { EMAIL, TOKEN_KEY, USER_NAME } from '../../constants';
import USER_TYPES from './types';

const initialState = {
	isAuth: localStorage.getItem(TOKEN_KEY) !== null,
	name: localStorage.getItem(USER_NAME) || '',
	email: localStorage.getItem(EMAIL) || '',
	token: localStorage.getItem(TOKEN_KEY) || '',
	error: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_TYPES.LOGIN_SUCCESS: {
			const userData = action.payload;
			return {
				...state,
				isAuth: true,
				name: userData.userName,
				token: userData.token,
				email: userData.email,
				error: null,
			};
		}

		case USER_TYPES.LOGIN_LOGOUT: {
			return {
				...state,
				isAuth: false,
				name: '',
				token: '',
				email: '',
				error: null,
			};
		}

		case USER_TYPES.LOGIN_ERROR: {
			const error = action.payload;

			return { ...state, error: error };
		}
		default:
			return state;
	}
};

export default userReducer;
