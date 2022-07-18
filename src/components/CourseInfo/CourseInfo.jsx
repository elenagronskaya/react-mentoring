import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';

import dataFormat from '../../helpers/dataFormat';
import { ROUTE_COURSES } from '../../constants';
import getCoursesSelector from '../../store/courses/selectors';
import getAuthorsSelector from '../../store/authors/selectors';
import getAuthorName from '../../helpers/getAuthorName';
import { getAuthorsThunk } from '../../store/authors/thunk';
import { getCourseByIdThunk } from '../../store/courses/thunk';
import store from '../../store';
import styles from './styles.module.scss';

const CourseInfo = () => {
	const { courseId } = useParams();

	const coursesData = useSelector(getCoursesSelector);
	const course = coursesData.showCourse;

	const authorsData = useSelector(getAuthorsSelector);
	const availableAuthors = authorsData?.list;

	useEffect(() => {
		store.dispatch(getCourseByIdThunk(courseId));
	}, [courseId]);

	useEffect(() => {
		if (!availableAuthors?.length) {
			store.dispatch(getAuthorsThunk());
		}
	}, [availableAuthors]);

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
								{course?.authors
									?.map((authorId) => getAuthorName(authorId, availableAuthors))
									.join(', ')}
							</span>
						</p>
					</div>
				</div>
			</div>
			<p className={styles.error}>{coursesData?.error}</p>
		</section>
	);
};

export default CourseInfo;
