import AUTHORS_TYPES from './types';

const initialState = {
	list: null,
	error: null,
};

const authorReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTHORS_TYPES.LIST_SUCCESS: {
			const authors = action.payload;
			return { ...state, list: authors, error: null };
		}
		case AUTHORS_TYPES.LIST_CREATE_SUCCESS: {
			const author = action.payload;
			return { ...state, list: [...state.list, author], error: null };
		}
		case AUTHORS_TYPES.LIST_ERROR: {
			const error = action.payload;
			return { ...state, error: error };
		}
		default:
			return state;
	}
};

export default authorReducer;
