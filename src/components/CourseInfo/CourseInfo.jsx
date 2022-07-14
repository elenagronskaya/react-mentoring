import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';

import dataFormat from '../../helpers/dataFormat';
import { ROUTE_COURSES } from '../../constants';
import getCoursesSelector from '../../store/courses/selectors';
import getAuthorsSelector from '../../store/authors/selectors';
import { getCourseById } from '../../services';
import getAuthorName from '../../helpers/getAuthorName';
import styles from './styles.module.scss';
import getAuthorsThunk from '../../store/authors/thunk';

const CourseInfo = () => {
	const coursesData = useSelector(getCoursesSelector);
	const course = coursesData.showCourse;

	const authorsData = useSelector(getAuthorsSelector);
	const availableAuthors = authorsData?.list;

	const { courseId } = useParams();

	const getCourseData = () => {
		getCourseById(courseId).then();
	};

	useEffect(() => getCourseData);

	useEffect(() => {
		if (!availableAuthors?.length) {
			getAuthorsThunk();
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
							{course?.authors?.map((authorId) => {
								return (
									<span className={styles.infoDesc} key={authorId}>
										{getAuthorName(authorId, availableAuthors)}
									</span>
								);
							})}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CourseInfo;
