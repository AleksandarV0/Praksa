import React from 'react';

import { Link } from 'react-router-dom';

const DaySummary = () => {
	return (
		<>
			<div className='date'>
				<span>30.</span>
			</div>
			<div className='hours'>
				<Link to='/days/5'>
					Hours: <span>7.5</span>
				</Link>
			</div>
		</>
	);
};

export default DaySummary;
