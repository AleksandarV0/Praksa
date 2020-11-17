import React from 'react';

import DaySummary from './DaySummary';

const MonthSummary = () => {
	return (
		<div>
			<table className='month-table'>
				<thead>
					<tr className='head'>
						<th>
							<span>monday</span>
						</th>
						<th>tuesday</th>
						<th>wednesday</th>
						<th>thursday</th>
						<th>friday</th>
						<th>saturday</th>
						<th>sunday</th>
					</tr>
					<tr className='mobile-head'>
						<th>mon</th>
						<th>tue</th>
						<th>wed</th>
						<th>thu</th>
						<th>fri</th>
						<th>sat</th>
						<th>sun</th>
					</tr>
				</thead>
				<tbody>
					{[0, 1, 2, 3, 4].map((example2) => (
						<tr key={Math.random(1, 10) + Math.random() * 99}>
							{[0, 1, 2, 3, 4, 5, 6].map((example) => (
								<td>
									<DaySummary key={1 + Math.random(1, 14) * 99} />
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MonthSummary;
