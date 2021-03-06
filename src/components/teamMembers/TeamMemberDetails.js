import React, { useEffect, useState } from 'react';

import $ from 'jquery';

import '../styles/CommonStyles.css';

const TeamMemberDetails = () => {
	const [accordionOpened, setAccordionOpened] = useState(false);

	useEffect(() => {
		var heading = '.accordion-wrap .heading';
		$(heading).click(function () {
			if (!$(this).parent().hasClass('open')) {
				$(this).next().slideDown('normal');
			} else {
				$(this).next().slideUp('normal');
			}
		});
	}, []);

	const toggleAccordian = () => {
		setAccordionOpened(!accordionOpened);
	};

	return (
		<div
			className={accordionOpened === true ? 'item open' : 'item'}
			onClick={toggleAccordian}>
			<div className='heading'>
				<span>Sladjana Miljanovic</span>
				<i>+</i>
			</div>
			<div className='details'>
				<ul className='form'>
					<li>
						<label>Name:</label>
						<input type='text' className='in-text' />
					</li>
					<li>
						<label>Hours per week:</label>
						<input type='text' className='in-text' />
					</li>
				</ul>
				<ul className='form'>
					<li>
						<label>Username:</label>
						<input type='text' className='in-text' />
					</li>
					<li>
						<label>Email:</label>
						<input type='text' className='in-text' />
					</li>
				</ul>
				<ul className='form last'>
					<li>
						<label>Status:</label>
						<span className='radio'>
							<label for='inactive'>Inactive:</label>
							<input
								type='radio'
								value='1'
								name='status'
								id='inactive'
								className='margin-left'
							/>
						</span>
						<span className='radio'>
							<label for='active'>Active:</label>
							<input
								type='radio'
								value='2'
								name='status'
								id='active'
								className='margin-left'
							/>
						</span>
					</li>
					<li>
						<label>Role:</label>
						<span className='radio'>
							<label for='admin'>Admin:</label>
							<input
								type='radio'
								value='1'
								name='status'
								id='admin'
								className='margin-left'
							/>
						</span>
						<span className='radio'>
							<label for='worker'>Worker:</label>
							<input
								type='radio'
								value='2'
								name='status'
								id='worker'
								className='margin-left'
							/>
						</span>
					</li>
				</ul>
				<div className='buttons'>
					<div className='inner'>
						<a href='/' className='btn green '>
							Save
						</a>
						<a href='/' className='btn red margin-left'>
							Delete
						</a>
						<a href='/' className='btn orange margin-left'>
							Reset Password
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamMemberDetails;
