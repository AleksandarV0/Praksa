import React from 'react';

import moment from 'moment';

import DayOfTheWeekSelector from './DayOfTheWeekSelector';

const WeekSelector = ({ currentDate, setCurrentDate }) => {
	return (
		<div className='grey-box-wrap'>
			<div className='top'>
				<a href='/' className='prev'>
					<i className='zmdi zmdi-chevron-left'></i>previous week
				</a>
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
				<a href='/' className='next'>
					next week<i className='zmdi zmdi-chevron-right'></i>
				</a>
			</div>
			<DayOfTheWeekSelector
				currentDate={currentDate}
				setCurrentDate={setCurrentDate}
			/>
		</div>
	);
};

export default WeekSelector;
