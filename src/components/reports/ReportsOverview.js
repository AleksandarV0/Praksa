import React from 'react';

import ReportSearch from './ReportSearch';
import AllReports from './AllReports';
import ReportFunctions from './ReportFunctions';

function ReportsOverview() {
	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>
					<i className='ico report'></i>Reports
				</h2>
				<ReportSearch />
				<AllReports />
				<ReportFunctions />
			</section>
		</div>
	);
}

export default ReportsOverview;
