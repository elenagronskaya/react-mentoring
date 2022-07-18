import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/';

import Button from '../../../../common/Button/Button';
import { ROUTE_COURSES, SHOW_COURSE, ROLE_ADMIN } from '../../../../constants';
import store from '../../../../store';
import DeleteBtn from '../../../../assets/trash.svg';
import UpdateBtn from '../../../../assets/edit-pen.png';
import getUsersSelector from '../../../../store/user/selectors';
import { deleteCourseByIdThunk } from '../../../../store/courses/thunk';
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

	const { role } = useSelector(getUsersSelector);

	const courseDelete = () => {
		store.dispatch(deleteCourseByIdThunk(id));
	};

	const courseUpdate = () => {
		navigate(`/courses/update/${id}`);
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
					{role === ROLE_ADMIN && (
						<>
							<Button
								imageLink={UpdateBtn}
								onClick={courseUpdate}
								showCourseButtonStyle={styles.buttonImg}
							/>
							<Button
								imageLink={DeleteBtn}
								onClick={courseDelete}
								showCourseButtonStyle={styles.buttonImg}
							/>
						</>
					)}
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
