import PropTypes from 'prop-types';

const dateFormat = (duration) => {
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

dateFormat.propTypes = {
	duration: PropTypes.number,
};

export default dateFormat;
