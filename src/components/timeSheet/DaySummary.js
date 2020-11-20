import React from 'react';

import { Link } from 'react-router-dom';

const DaySummary = ({ date, currentDate, dayWorkingHours }) => {
	return (
		<>
			<div className='date'>
				<span>{date.split('-')[2]}.</span>
			</div>
			<div className='hours'>
				<Link to='/days/5'>
					Hours: <span>{dayWorkingHours}</span>
				</Link>
			</div>
		</>
	);
};

export default DaySummary;
