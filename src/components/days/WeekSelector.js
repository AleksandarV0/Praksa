import React from 'react';

import DayOfTheWeekSelector from './DayOfTheWeekSelector';

const WeekSelector = () => {
	return (
		<div className='grey-box-wrap'>
			<div className='top'>
				<a href='/' className='prev'>
					<i className='zmdi zmdi-chevron-left'></i>previous week
				</a>
				<span className='center'>February 04 - February 10, 2013 (week 6)</span>
				<a href='/' className='next'>
					next week<i className='zmdi zmdi-chevron-right'></i>
				</a>
			</div>
			<DayOfTheWeekSelector />
		</div>
	);
};

export default WeekSelector;
