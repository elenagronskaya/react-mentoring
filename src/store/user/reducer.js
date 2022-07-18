import { EMAIL, TOKEN_KEY, USER_NAME } from '../../constants';
import USER_TYPES from './types';

const initialState = {
	isAuth: localStorage.getItem(TOKEN_KEY) !== null,
	name: localStorage.getItem(USER_NAME) || '',
	email: localStorage.getItem(EMAIL) || '',
	token: localStorage.getItem(TOKEN_KEY) || '',
	role: '',
	error: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_TYPES.LOGIN_SUCCESS: {
			const userData = action.payload;
			localStorage.setItem(TOKEN_KEY, userData.token);
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
			localStorage.removeItem(TOKEN_KEY);
			return {
				...state,
				isAuth: false,
				name: '',
				token: '',
				email: '',
				role: null,
				error: null,
			};
		}

		case USER_TYPES.GETUSERME_SUCCESS: {
			const userData = action.payload;
			return {
				...state,
				isAuth: true,
				name: userData.userName,
				role: userData.role,
				email: userData.email,
				error: null,
			};
		}

		case USER_TYPES.LOGIN_ERROR: {
			const error = action.payload;
			return { ...state, error: error };
		}

		case USER_TYPES.LOGOUT_USER_ERROR: {
			const error = action.payload;
			return { ...state, error: error };
		}

		default:
			return state;
	}
};

export default userReducer;
