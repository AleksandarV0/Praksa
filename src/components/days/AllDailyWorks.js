import React from 'react';

import DailyWorkDetails from './DailyWorkDetails';

const AllDailyWorks = () => {
	return (
		<table className='default-table'>
			<thead>
				<tr>
					<th>
						Client <em>*</em>
					</th>
					<th>
						Project <em>*</em>
					</th>
					<th>
						Category <em>*</em>
					</th>
					<th>Description</th>
					<th className='small'>
						Time <em>*</em>
					</th>
					<th className='small'>Overtime</th>
				</tr>
			</thead>
			<tbody>
				{[0, 1, 2, 3, 4, 5, 6].map((example) => (
					<tr key={Math.random()}>
						<DailyWorkDetails />
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default AllDailyWorks;
