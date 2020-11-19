import React, { useState, useEffect } from 'react';

import MonthSelector from './MonthSelector';
import MonthSummary from './MonthSummary';
import TotalWorkTime from './TotalMonthWorkTime';
import { useHistory } from 'react-router-dom';

const TimeSheet = () => {
	const history = useHistory();
	const [currentDate, setCurrentDate] = useState({
		year: new Date().getFullYear(), //! 2020
		month: new Date().getMonth(), //! November
	});

	useEffect(() => {
		console.log('PathName> ', history.location.pathname);
		if (!isNaN(Date.parse(history.location.pathname.split('/')[2]))) {
			const urlDate = history.location.pathname.split('/')[2];
			const urlYear = urlDate.split('-')[0];
			const urlMonth = urlDate.split('-')[1];
			if (urlYear != currentDate.year || urlMonth - 1 != currentDate.month) {
				setCurrentDate({ year: urlYear, month: urlMonth - 1 });
			}
		}
	}, [history.location.pathname]);

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
				<MonthSummary />
				<TotalWorkTime />
			</section>
		</div>
	);
};

export default TimeSheet;
