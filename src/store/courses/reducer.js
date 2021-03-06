import COURSE_TYPES from './types';

const initialState = {
	list: null,
	searchResult: [],
	showCourse: null,
	selectedCourse: null,
	error: null,
};

const coursesReducer = (state = initialState, action) => {
	switch (action.type) {
		case COURSE_TYPES.LIST_SUCCESS: {
			const courses = action.payload;
			return { ...state, list: courses, error: null };
		}

		case COURSE_TYPES.SEARCH_RESULT_SUCCESS: {
			const courses = action.payload;
			return { ...state, searchResult: courses, error: null };
		}

		case COURSE_TYPES.CREATE_SUCCESS: {
			const course = action.payload;
			return { ...state, list: [...state.list, course], error: null };
		}

		case COURSE_TYPES.SHOW_SUCCESS: {
			const course = action.payload;
			return {
				...state,
				showCourse: course,
				error: null,
			};
		}

		case COURSE_TYPES.SELECTED_SET_PROPERTY_SUCCESS: {
			const { name, value } = action.payload;
			return {
				...state,
				selectedCourse: { ...state.selectedCourse, [name]: value },
				error: null,
			};
		}

		case COURSE_TYPES.SELECTED_SUCCESS: {
			const course = action.payload;
			return {
				...state,
				selectedCourse: course,
				error: null,
			};
		}

		case COURSE_TYPES.SELECTED_ERROR: {
			const errorText = action.payload;
			return {
				...state,
				error: errorText,
			};
		}

		case COURSE_TYPES.UPDATE_SUCCESS: {
			const { id, course } = action.payload;
			const index = state.list?.findIndex((x) => x.id === id);
			const oldList = [...state];
			state[index] = { ...course };
			return {
				oldList,
				list: [...state?.list],
				error: null,
			};
		}

		case COURSE_TYPES.DELETE_SUCCESS: {
			const courseId = action.payload;
			return {
				...state,
				list: [...state.list?.filter((item) => item.id !== courseId)],
				searchResult: [
					...state.searchResult?.filter((item) => item.id !== courseId),
				],
				error: null,
			};
		}

		case COURSE_TYPES.SHOW_ERROR: {
			const error = action.payload;

			return { ...state, error: error };
		}

		case COURSE_TYPES.DELETE_ERROR: {
			const error = action.payload;

			return { ...state, error: error };
		}

		case COURSE_TYPES.CREATE_ERROR: {
			const error = action.payload;

			return { ...state, error: error };
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
