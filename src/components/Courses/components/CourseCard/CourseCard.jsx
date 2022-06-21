import React from 'react';
import Button from '../../../../common/Button/Button';
import { SHOW_COURSE } from '../../../../constants';
import './courseCard.css';

const CourseCard = ({
	title,
	description,
	authors,
	duration,
	creationDate,
}) => {
	return (
		<div className='cardWrapper'>
			<div className='cardContent'>
				<h3 className='title'>{title}</h3>
				<p className='descriptionCourse'>{description}</p>
			</div>
			<div className='cardInfo'>
				<p className='courseInfo'>
					Author:
					<span className='descCard'> {authors.join(', ')}</span>
				</p>
				<p className='courseInfo'>
					Duration:
					<span className='descCard'> {duration}</span>
				</p>
				<p className='courseInfo'>
					Created:
					<span className='descCard'> {creationDate}</span>
				</p>
				<Button
					buttonText={SHOW_COURSE}
					showCourseButtonStyle='showCourseButtonStyle'
				/>
			</div>
		</div>
	);
};

export default CourseCard;
