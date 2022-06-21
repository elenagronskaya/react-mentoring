const dataFormat = (duration) => {
	let minutes = duration % 60;
	let hours = (duration - minutes) / 60;

	return (
		hours.toString().padStart(2, '0') +
		':' +
		minutes.toString().padStart(2, '0') +
		' hour' +
		(hours > 1 ? 's' : '')
	);
};

export default dataFormat;
