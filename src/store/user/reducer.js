import USER_TYPES from './types';

const initialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
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
				...initialState,
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
