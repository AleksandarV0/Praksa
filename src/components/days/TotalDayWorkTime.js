import React from 'react';

import { Link, useParams } from 'react-router-dom';

const TotalDayWorkTime = () => {
	return (
		<div className='total'>
			<Link to={`/timesheet/${useParams().date}`}>
				<i></i>back to monthly view
			</Link>
			<span>
				Total hours: <em>7.5</em>
			</span>
		</div>
	);
};

export default TotalDayWorkTime;
