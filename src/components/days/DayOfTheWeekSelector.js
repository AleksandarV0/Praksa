import React from 'react';

import ConcreteDay from './ConcreteDay';

const DayOfTheWeekSelector = ({ currentDate, setCurrentDate }) => {
	return (
		<div className='bottom'>
			<ul className='days'>
				{[1, 2, 3, 4, 5, 6, 7].map((index) => (
					<ConcreteDay
						currentDate={currentDate}
						dayIndex={index}
						setCurrentDate={setCurrentDate}
						key={index}
					/>
				))}
			</ul>
		</div>
	);
};

export default DayOfTheWeekSelector;
