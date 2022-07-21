import store from './store';
import { searchCourseResultSuccess } from './store/courses/actions';

export const searchCourses = (allCourses, filter) => {
	const courses = allCourses.filter(
		(item) =>
			filter == null ||
			filter === '' ||
			item.title.toLowerCase().includes(filter.toLowerCase()) ||
			item.id.toLowerCase().includes(filter.toLowerCase())
	);
	store.dispatch(searchCourseResultSuccess(courses));
};
