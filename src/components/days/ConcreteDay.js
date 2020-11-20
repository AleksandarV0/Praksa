import React from 'react';

import moment from 'moment';
import { Link } from 'react-router-dom';

const ConcreteDay = ({ currentDate, dayIndex, setCurrentDate }) => {
	const dayNumber =
		currentDate.actualDate.day() === 0 ? 7 : currentDate.actualDate.day();
	const days = [
		'',
		'MONDAY',
		'TUESDAY',
		'WEDNESDAY',
		'THURSDAY',
		'FRIDAY',
		'SATURDAY',
		'SUNDAY',
	];

	const returnCorrectDay = () => {
		if (dayNumber > dayIndex) {
			return moment(
				`${currentDate.year}${currentDate.month}${currentDate.day}`,
				'YYYYMMDD'
			)
				.subtract(dayNumber - dayIndex, 'days')
				.format('MMM DD');
		} else if (dayNumber < dayIndex) {
			return moment(
				`${currentDate.year}${currentDate.month}${currentDate.day}`,
				'YYYYMMDD'
			)
				.add(dayIndex - dayNumber, 'days')
				.format('MMM DD');
		} else {
			return moment(
				`${currentDate.year}${currentDate.month}${currentDate.day}`,
				'YYYYMMDD'
			).format('MMM DD');
		}
	};

	const returnLinkDay = () => {
		if (dayNumber > dayIndex) {
			return moment(
				`${currentDate.year}${currentDate.month}${currentDate.day}`,
				'YYYYMMDD'
			)
				.subtract(dayNumber - dayIndex, 'days')
				.format('DD');
		} else if (dayNumber < dayIndex) {
			return moment(
				`${currentDate.year}${currentDate.month}${currentDate.day}`,
				'YYYYMMDD'
			)
				.add(dayIndex - dayNumber, 'days')
				.format('DD');
		} else {
			return moment(
				`${currentDate.year}${currentDate.month}${currentDate.day}`,
				'YYYYMMDD'
			).format('DD');
		}
	};

	const updateCurrentDate = () => {
		setCurrentDate({
			actualDate: moment(
				`${currentDate.year}-${currentDate.month}-${returnLinkDay()}`,
				'YYYY-MM-DD'
			),
			year: currentDate.year,
			month: currentDate.month,
			day: returnLinkDay(),
		});
	};

	return (
		<li className={dayNumber === dayIndex ? 'active' : ''}>
			<Link
				to={`/timesheet/days/${currentDate.year}-${
					currentDate.month
				}-${returnLinkDay()}`}
				onClick={updateCurrentDate}>
				<b>{returnCorrectDay()}</b>

				<span>{days[dayIndex]}</span>
			</Link>
		</li>
	);
};

export default ConcreteDay;
