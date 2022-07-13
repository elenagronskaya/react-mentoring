import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../common/Button/Button';
import { ROUTE_COURSES, SHOW_COURSE } from '../../../../constants';
import store from '../../../../store';
import { deleteCourseSuccess } from '../../../../store/courses/actions';
import DeleteBtn from '../../../../assets/trash.svg';
import UpdateBtn from '../../../../assets/edit-pen.png';
import styles from './styles.module.scss';

const CourseCard = ({
	title,
	description,
	authors,
	duration,
	creationDate,
	id,
}) => {
	const navigate = useNavigate();

	const courseDelete = () => {
		store.dispatch(deleteCourseSuccess(id));
	};
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
				<div className={styles.buttonWrapper}>
					<Button
						buttonText={SHOW_COURSE}
						showCourseButtonStyle={styles.showCourseButtonStyle}
						onClick={() => navigate(`${ROUTE_COURSES}/${id}`)}
					/>
					<Button
						imageLink={DeleteBtn}
						onClick={courseDelete}
						showCourseButtonStyle={styles.buttonImg}
					/>
					<Button
						imageLink={UpdateBtn}
						showCourseButtonStyle={styles.buttonImg}
					/>
				</div>
			</div>
		</div>
	);
};

CourseCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired,
	authors: PropTypes.array.isRequired,
	creationDate: PropTypes.string.isRequired,
};

export default CourseCard;
