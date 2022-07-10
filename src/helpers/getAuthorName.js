const getAuthorName = (authorId, authors) => {
	if (authors) {
		const author = authors.find((author) => author.id === authorId);
		if (author) return author.name;
	}
	return '';
};

export default getAuthorName;
