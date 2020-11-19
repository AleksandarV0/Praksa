import React, { useState } from 'react';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function ReportSearch() {
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	const DateStartInput = ({ value, onClick }) => {
		return (
			<input
				type='text'
				className='in-text datepicker'
				value={value}
				onClick={onClick}
				style={{ width: '119%' }}
			/>
		);
	};

	const DateEndInput = ({ value, onClick }) => {
		return (
			<input
				type='text'
				className='in-text datepicker'
				value={value}
				onClick={onClick}
				style={{ width: '119%' }}
			/>
		);
	};

	return (
		<div className='grey-box-wrap reports'>
			<ul className='form'>
				<li>
					<label>Team member:</label>
					<select>
						<option>All</option>
					</select>
				</li>
				<li>
					<label>Category:</label>
					<select>
						<option>All</option>
					</select>
				</li>
			</ul>
			<ul className='form'>
				<li>
					<label>Client:</label>
					<select>
						<option>All</option>
					</select>
				</li>
				<li>
					<label>Start date:</label>
					<DatePicker
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						customInput={<DateStartInput />}
					/>
				</li>
			</ul>
			<ul className='form last'>
				<li>
					<label>Project:</label>
					<select>
						<option>All</option>
					</select>
				</li>
				<li>
					<label>End date:</label>
					<DatePicker
						selected={endDate}
						onChange={(date) => setEndDate(date)}
						customInput={<DateEndInput />}
					/>
				</li>
				<li>
					<a href='/' className='btn orange right'>
						Reset
					</a>
					<a href='/' className='btn green right'>
						Search
					</a>
				</li>
			</ul>
		</div>
	);
}

export default ReportSearch;
