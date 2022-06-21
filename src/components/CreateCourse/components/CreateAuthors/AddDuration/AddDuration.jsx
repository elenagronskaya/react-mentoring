import React from 'react';
import Input from '../../../../../common/Input/Input';
import { DURATION } from '../../../../../constants';
import dataFormat from '../../../../../helpers/dataFormat';
import './addDuration.css';

const AddDuration = ({ duration, setDuration }) => {
	return (
		<div className='addAuthorWrapper'>
			<h2 className='addAuthorTitle'>Duration</h2>
			<Input
				labelText={DURATION}
				placeholder='Enter duration in minutes...'
				createCourseInput='addInput'
				onChange={(event) => setDuration(event.target.value)}
			/>
			<p className='durationCoun'>
				Duration:{' '}
				<span className='durationCounNumber'>{dataFormat(duration)}</span>
			</p>
		</div>
	);
};

export default AddDuration;
