import React from 'react';
import Button from '../../../../common/Button/Button';
import { SHOW_COURSE } from '../../../../constants';
import styles from './styles.module.scss';

const CourseCard = ({
	title,
	description,
	authors,
	duration,
	creationDate,
}) => (
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
			/>
		</div>
	</div>
);

export default CourseCard;
