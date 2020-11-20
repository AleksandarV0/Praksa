import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MonthSelector from './MonthSelector';
import MonthSummary from './MonthSummary';
import TotalWorkTime from './TotalMonthWorkTime';

const TimeSheet = ({ date }) => {
	let urlParams = useParams();
	const [currentDate, setCurrentDate] = useState({
		year: new Date().getFullYear(), //! 2020
		month: new Date().getMonth(), //! November
	});

	useEffect(() => {
		if (!isNaN(Date.parse(urlParams.date))) {
			const urlYear = urlParams.date.split('-')[0];
			const urlMonth = urlParams.date.split('-')[1];
			if (urlYear != currentDate.year || urlMonth - 1 != currentDate.month) {
				setCurrentDate({ year: urlYear, month: urlMonth - 1 });
			}
		}
	}, []);

	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>
					<i className='ico timesheet'></i>TimeSheet
				</h2>
				<MonthSelector
					currentDate={currentDate}
					setCurrentDate={setCurrentDate}
				/>
				<MonthSummary currentDate={currentDate} />
				<TotalWorkTime />
			</section>
		</div>
	);
};

export default TimeSheet;
