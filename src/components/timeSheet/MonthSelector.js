import React from 'react';
import { useHistory } from 'react-router-dom';

const MonthSelector = ({ currentDate, setCurrentDate }) => {
	const history = useHistory();

	const MonthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const goToPreviousMonth = (e) => {
		e.preventDefault();
		if (currentDate.month - 1 < 0) {
			history.push(`/index/${currentDate.year - 1}-12`);
			setCurrentDate({ year: currentDate.year - 1, month: 11 });
		} else {
			history.push(`/index/${currentDate.year}-${currentDate.month + 1 - 1}`);
			setCurrentDate({ ...currentDate, month: currentDate.month - 1 });
		}
	};

	const goToNextMonth = (e) => {
		e.preventDefault();
		if (currentDate.month + 1 > 11) {
			history.push(`/index/${currentDate.year + 1}-1`);
			setCurrentDate({ year: currentDate.year + 1, month: 0 });
		} else {
			history.push(`/index/${currentDate.year}-${currentDate.month + 1 + 1}`);
			setCurrentDate({ ...currentDate, month: currentDate.month + 1 });
		}
	};

	return (
		<div className='grey-box-wrap'>
			<div className='top'>
				<a href='/' onClick={goToPreviousMonth} className='prev'>
					<i className='zmdi zmdi-chevron-left'></i>previous month
				</a>
				<span className='center'>
					{MonthNames[currentDate.month] + ', ' + currentDate.year}
				</span>

				<a href='/' onClick={goToNextMonth} className='next'>
					next month<i className='zmdi zmdi-chevron-right'></i>
				</a>
			</div>
			<div className='bottom'></div>
		</div>
	);
};

export default MonthSelector;
