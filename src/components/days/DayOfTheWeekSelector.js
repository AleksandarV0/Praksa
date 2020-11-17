import React from 'react';

const DayOfTheWeekSelector = () => {
	return (
		<div className='bottom'>
			<ul className='days'>
				<li>
					<a href='/'>
						<b>Feb 04</b>

						<span>monday</span>
					</a>
				</li>
				<li>
					<a href='/'>
						<b>Feb 06</b>

						<span>tuesday</span>
					</a>
				</li>
				<li>
					<a href='/'>
						<b>Feb 06</b>

						<span>wednesday</span>
					</a>
				</li>
				<li className='active'>
					<a href='/'>
						<b>Feb 07</b>

						<span>thursday</span>
					</a>
				</li>
				<li>
					<a href='/'>
						<b>Feb 08</b>

						<span>friday</span>
					</a>
				</li>
				<li>
					<a href='/'>
						<b>Feb 09</b>

						<span>saturday</span>
					</a>
				</li>
				<li className='last'>
					<a href='/'>
						<b>Feb 10</b>

						<span>sunday</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default DayOfTheWeekSelector;
