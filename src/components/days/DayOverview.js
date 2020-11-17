import React from 'react';

import WeekSelector from './WeekSelector';
import TotalDayWorkTime from './TotalDayWorkTime';
import AllDailyWorks from './AllDailyWorks';

const DayOverview = () => {
	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>
					<i className='ico timesheet'></i>TimeSheet
				</h2>
				<WeekSelector />
				<AllDailyWorks />
				<TotalDayWorkTime />
			</section>
		</div>
	);
};

export default DayOverview;
