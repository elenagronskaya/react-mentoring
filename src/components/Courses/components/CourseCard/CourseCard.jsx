import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../../../common/Button/Button';
import { SHOW_COURSE } from '../../../../constants';
import styles from './styles.module.scss';

const CourseCard = ({
	title,
	description,
	authors,
	duration,
	creationDate,
	id,
}) => {
	let navigate = useNavigate();
	return (
		<div className={styles.cardWrapper}>
			<div className={styles.cardContent}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.descriptionCourse}>{description}</p>
			</div>
			<div className={styles.cardInfo}>
				<p className={styles.courseInfo}>
					Author:
					<span className={styles.descCard}> {authors.join(', ')}</span>
				</p>
				<p className={styles.courseInfo}>
					Duration:
					<span className={styles.descCard}> {duration}</span>
				</p>
				<p className={styles.courseInfo}>
					Created:
					<span className={styles.descCard}> {creationDate}</span>
				</p>
				<Button
					buttonText={SHOW_COURSE}
					showCourseButtonStyle={styles.showCourseButtonStyle}
					onClick={() => navigate(`/courses/${id}`)}
				/>
			</div>
		</div>
	);
};

CourseCard.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	duration: PropTypes.string,
	authors: PropTypes.array,
	creationDate: PropTypes.string,
};

export default CourseCard;
