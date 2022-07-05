import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import { getCourseById } from '../../services/courseService';
import dataFormat from '../../helpers/dataFormat';
import styles from './styles.module.scss';
import { ROUTE_COURSES } from '../../constants';

const CourseInfo = () => {
	const [course, setCourse] = useState(null);
	const { courseId } = useParams();

	useEffect(() => {
		setCourse(getCourseById(courseId));
	}, [courseId]);

	const createDate = moment().format('DD.MM.YYYY');

	return (
		<section className={styles.courseInfo}>
			<Link to={ROUTE_COURSES} className={styles.link}>
				&lt; Back to courses
			</Link>
			<div>
				<h3 className={styles.title}>{course?.title || ''}</h3>
				<div className={styles.content}>
					<div className={styles.description}>{course?.description || ''}</div>
					<div className={styles.infoWrapper}>
						<p className={styles.infoTitle}>
							ID: <span className={styles.infoDesc}>{course?.id || ''}</span>
						</p>
						<p className={styles.infoTitle}>
							Duration:{' '}
							<span className={styles.infoDesc}>
								{dataFormat(course?.duraction || null)}
							</span>
						</p>
						<p className={styles.infoTitle}>
							Created: <span className={styles.infoDesc}>{createDate}</span>
						</p>
						<p className={styles.infoTitle}>
							Authors:{' '}
							<span className={styles.infoDesc}>
								{course?.authors.join(', ') || ''}
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CourseInfo;
