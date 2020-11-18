import React from 'react';

import ReportDetails from './ReportDetails';

function AllReports() {
	return (
		<table className='default-table'>
			<thead>
				<tr>
					<th>Date</th>
					<th>Team member</th>
					<th>Projects</th>
					<th>Categories</th>
					<th>Description</th>
					<th className='small'>Time</th>
				</tr>
			</thead>
			<tbody>
				{[0, 1, 2].map((example) => (
					<tr>
						<ReportDetails key={Math.random()} />
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default AllReports;
