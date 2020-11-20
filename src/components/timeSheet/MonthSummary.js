import React from 'react';

import DaySummary from './DaySummary';

const MonthSummary = ({ currentDate }) => {
	var dateCounter = 0;
	var doPrintPreviousDates = false;
	const firstDayOfSelectedMonth = new Date( // ! 4
		`${currentDate.year}-${currentDate.month + 1}-1`
	).getDay();

	// ! Leap year is if: divisible with 4 and not divisible with 100 but divisible with 400
	const leapDayCalculatorOfYear = () => {
		if (currentDate.year % 4 === 0 && currentDate.year % 100 !== 0) {
			return '29';
		} else if (currentDate.year % 4 === 0 && currentDate.year % 400 === 0) {
			return '29';
		}
		return '28';
	};

	const NumberOfDaysInMonth = [
		'31', // jan
		leapDayCalculatorOfYear(), // feb -> 28 or 29
		'31', // mar
		'30', // apr
		'31', // maj
		'30', // jun
		'31', // jul
		'31', // avg
		'30', // sept
		'31', // okt
		'30', // nov
		'31', // dec
	];

	const renderujKalendar = () => {
		const startDay = firstDayOfSelectedMonth - 1;
		const previousMonthDayNumbers =
			NumberOfDaysInMonth[
				currentDate.month - 1 < 0 ? 11 : currentDate.month - 1
			];
		const currentMonthDayNumbers = NumberOfDaysInMonth[currentDate.month];
		if (startDay >= 0) {
			dateCounter = previousMonthDayNumbers - startDay;
		} else {
			dateCounter = previousMonthDayNumbers - 6; // ! 6 zbog toga, jer dani idu 0-> nedelja, 1-> ponedeljak, a indexi tabele krecu od 0, te moramo da obrnemo nedelju da ona dobije index 6
		}

		if (startDay == 0) {
			doPrintPreviousDates = false;
		} else {
			doPrintPreviousDates = true;
		}

		return [1, 2, 3, 4, 5].map((rowIndex) => (
			<tr key={Math.random(1, 10) + Math.random() * 99}>
				{[1, 2, 3, 4, 5, 6, 7].map((colIndex) => (
					<td>
						<DaySummary
							date={prepareDateStart(
								currentMonthDayNumbers,
								previousMonthDayNumbers
							)}
							dayWorkingHours='7.5'
							key={1 + Math.random(1, 14) * 99}
						/>
					</td>
				))}
			</tr>
		));
	};

	const prepareDateStart = (
		// TODO PREGLEDAJ, GRANICNI SLUCAJEVI SU ZEZNUTI
		currentMonthDayNumbers,
		previousMonthDayNumbers
	) => {
		if (doPrintPreviousDates) {
			if (dateCounter + 1 > previousMonthDayNumbers) {
				// BEFORE
				dateCounter = 1;
				doPrintPreviousDates = false;
				return `${currentDate.year}-${currentDate.month + 1}-${dateCounter}`;
			} else {
				dateCounter += 1;
				return `${currentDate.year}-${currentDate.month}-${dateCounter}`;
			}
		} else {
			if (dateCounter + 1 > currentMonthDayNumbers) {
				// AFTER
				dateCounter = 1;
				return `${
					currentDate.month + 1 > 11 ? currentDate.year + 1 : currentDate.year
				}-${
					currentDate.month + 2 > 11 ? '1' : currentDate.month + 2
				}-${dateCounter}`;
			} else {
				dateCounter += 1;
				return `${currentDate.year}-${currentDate.month + 1}-${dateCounter}`;
			}
		}
	};

	return (
		<div>
			{console.log('First day> ', firstDayOfSelectedMonth)}
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
				<tbody>{renderujKalendar()}</tbody>
			</table>
		</div>
	);
};

export default MonthSummary;
