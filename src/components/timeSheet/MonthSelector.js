import React from 'react';

const MonthSelector = () => {
	return (
		<div className='grey-box-wrap'>
			<div className='top'>
				<a href='/' className='prev'>
					<i className='zmdi zmdi-chevron-left'></i>previous month
				</a>
				<span className='center'>February, 2013</span>
				<a href='/' className='next'>
					next month<i className='zmdi zmdi-chevron-right'></i>
				</a>
			</div>
			<div className='bottom'></div>
		</div>
	);
};

export default MonthSelector;
