import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import moment from 'moment';

import WeekSelector from './WeekSelector';
import TotalDayWorkTime from './TotalDayWorkTime';
import AllDailyWorks from './AllDailyWorks';

const DayOverview = () => {
	let urlParamsDate = moment(useParams().date, 'YYYY-MM-DD');
	const [currentDate, setCurrentDate] = useState({
		actualDate: urlParamsDate,
		year: urlParamsDate.format('YYYY'),
		month: urlParamsDate.format('MM'),
		day: urlParamsDate.format('DD'),
	});

	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>
					<i className='ico timesheet'></i>TimeSheet
				</h2>
				<WeekSelector
					currentDate={currentDate}
					setCurrentDate={setCurrentDate}
				/>
				<AllDailyWorks />
				<TotalDayWorkTime />
			</section>
		</div>
	);
};

export default DayOverview;
