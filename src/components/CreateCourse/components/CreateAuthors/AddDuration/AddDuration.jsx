import React from 'react';
import Input from '../../../../../common/Input/Input';
import { DURATION } from '../../../../../constants';
import dataFormat from '../../../../../helpers/dataFormat';
import styles from './styles.module.scss';

const AddDuration = ({ duration, setDuration }) => (
	<div className={styles.addAuthorWrapper}>
		<h2 className={styles.addAuthorTitle}>Duration</h2>
		<Input
			labelText={DURATION}
			placeholder='Enter duration in minutes...'
			createCourseInput={styles.addInput}
			onChange={(event) => setDuration(event.target.value)}
			type='number'
			required
		/>
		<p className={styles.durationCoun}>
			Duration:{' '}
			<span className={styles.durationCounNumber}>{dataFormat(duration)}</span>
		</p>
	</div>
);

export default AddDuration;
