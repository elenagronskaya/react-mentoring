import { mockedCoursesList, mockedAuthorsList } from '../mocked-data';

export const getCourses = (filter) => {
	return mockedCoursesList
		.filter(
			(item) =>
				filter == null ||
				filter === '' ||
				item.title.toLowerCase().includes(filter.toLowerCase()) ||
				item.id.toLowerCase().includes(filter.toLowerCase())
		)
		.map((item) => {
			const author = { ...item };
			author.authors = joinAuthors(item.authors);
			return author;
		});
};

export const getCourseById = (id) => {
	const courses = mockedCoursesList
		.filter((item) => item.id.toLowerCase().includes(id.toLowerCase()))
		.map((item) => {
			const author = { ...item };
			author.authors = joinAuthors(item.authors);
			return author;
		});
	if (courses == null) return null;
	if (courses.length === undefined) {
		return courses;
	}
	return courses[0];
};

export const joinAuthors = (authorIds) => {
	return authorIds.map((authorId) => {
		const authors = mockedAuthorsList.filter(({ id }) => id === authorId);
		if (authors !== null) {
			return authors[0].name;
		}
		return '';
	});
};

export const addCourse = (course) => {
	mockedCoursesList.push(course);
};

export const getAuthorById = (authorId) => {
	const author = mockedAuthorsList.find((item) => item.id === authorId);
	return { ...author };
};

export const getAuthors = () => {
	return [...mockedAuthorsList];
};
