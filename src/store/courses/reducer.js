import COURSE_TYPES from './types';

const initialState = {
	list: [],
	error: null,
};

const coursesReducer = (state = initialState, action) => {
	switch (action.type) {
		case COURSE_TYPES.LIST_SUCCESS: {
			const courses = action.payload;
			return { ...state, list: courses, error: null };
		}
		case COURSE_TYPES.CREATE_SUCCESS: {
			const course = action.payload;
			return { ...state, list: [...state.list, course], error: null };
		}
		case COURSE_TYPES.DELETE_SUCCESS: {
			const courseId = action.payload;
			debugger;
			return {
				...state,
				list: [...state.list?.filter((item) => item.id !== courseId)],
				error: null,
			};
		}
		case COURSE_TYPES.LIST_ERROR: {
			const error = action.payload;

			return { ...state, error: error };
		}
		default:
			return state;
	}
};

export default coursesReducer;
