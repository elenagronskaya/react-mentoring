import coursesReducer from '../courses/reducer';
import COURSE_TYPES from '../courses/types';

describe(coursesReducer, () => {
	it('should return the initial state', () => {
		expect(coursesReducer(undefined, { type: undefined })).toEqual({
			list: null,
			searchResult: [],
			showCourse: null,
			selectedCourse: null,
			error: null,
		});
	});

	it('should return the new state', () => {
		const state = coursesReducer(undefined, {
			type: COURSE_TYPES.LIST_SUCCESS,
			payload: [{ id: 0, name: 'coursename0' }],
		});

		const newstate = coursesReducer(state, {
			type: COURSE_TYPES.CREATE_SUCCESS,
			payload: { id: 1, name: 'coursename1' },
		});

		expect(newstate.list.length).toEqual(2);
	});
});
