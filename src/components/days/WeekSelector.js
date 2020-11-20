import React from 'react';

import { Link, useParams } from 'react-router-dom';
import moment from 'moment';

import DayOfTheWeekSelector from './DayOfTheWeekSelector';

const WeekSelector = ({ currentDate, setCurrentDate }) => {
	const previousDate = moment(useParams().date, 'YYYY-MM-DD')
		.subtract(7, 'days')
		.format('YYYY-MM-DD');
	const nextDate = moment(useParams().date, 'YYYY-MM-DD')
		.add(7, 'days')
		.format('YYYY-MM-DD');

	const updateCurrentDate = (date) => {
		setCurrentDate({
			actualDate: moment(date, 'YYYY-MM-DD'),
			year: date.split('-')[0],
			month: date.split('-')[1],
			day: date.split('-')[2],
		});
	};

	return (
		<div className='grey-box-wrap'>
			{console.log(previousDate)}
			<div className='top'>
				<Link
					to={`/timesheet/days/${previousDate}`}
					className='prev'
					onClick={() => updateCurrentDate(previousDate)}>
					<i className='zmdi zmdi-chevron-left'></i>previous week
				</Link>
				<span className='center'>
					{currentDate.actualDate.format('MMMM DD -') +
						' ' +
						moment(
							`${currentDate.year}${currentDate.month}${currentDate.day}`,
							'YYYYMMDD'
						)
							.add(6, 'days')
							.format('MMMM DD, YYYY [(week ]w[)]')}
				</span>
				<Link
					to={`/timesheet/days/${nextDate}`}
					className='next'
					onClick={() => updateCurrentDate(nextDate)}>
					next week<i className='zmdi zmdi-chevron-right'></i>
				</Link>
			</div>
			<DayOfTheWeekSelector
				currentDate={currentDate}
				setCurrentDate={setCurrentDate}
			/>
		</div>
	);
};

export default WeekSelector;
