import React from 'react';

import { Link } from 'react-router-dom';

const DaySummary = ({ date, dayWorkingHours }) => {
	return (
		<>
			<div className='date'>
				<span>{date.split('-')[2]}.</span>
			</div>
			<div className='hours'>
				<Link to={`/timesheet/days/${date}`}>
					Hours: <span>{dayWorkingHours}</span>
				</Link>
			</div>
		</>
	);
};

export default DaySummary;
