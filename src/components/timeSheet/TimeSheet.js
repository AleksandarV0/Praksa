import React from 'react';

import MonthSelector from './MonthSelector';
import MonthSummary from './MonthSummary';
import TotalWorkTime from './TotalMonthWorkTime';

const TimeSheet = () => {
	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>
					<i className='ico timesheet'></i>TimeSheet
				</h2>
				<MonthSelector />
				<MonthSummary />
				<TotalWorkTime />
			</section>
		</div>
	);
};

export default TimeSheet;
