import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import '../styles/CommonStyles.css';

const ClientDetails = ({ client }) => {
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
			className={accordionOpened == true ? 'item open' : 'item'}
			onClick={toggleAccordian}>
			<div className='heading'>
				<span>{client.companyName}</span>
				<i>+</i>
			</div>
			<div className='details'>
				<ul className='form'>
					<li>
						<label>Client name:</label>
						<input type='text' className='in-text' value={client.clientName} />
					</li>
					<li>
						<label>Zip/Postal code:</label>
						<input type='text' className='in-text' value={client.zipCode} />
					</li>
				</ul>
				<ul className='form'>
					<li>
						<label>Address:</label>
						<input type='text' className='in-text' value={client.address} />
					</li>
					<li>
						<label>Country:</label>
						<select placeholder='test'>
							<option>Select country</option>
						</select>
					</li>
				</ul>
				<ul className='form last'>
					<li>
						<label>City:</label>
						<input type='text' className='in-text' value={client.city} />
					</li>
				</ul>
				<div className='buttons'>
					<div className='inner'>
						<a href='/' className='btn green margin-right'>
							Save
						</a>
						<a href='/' className='btn red'>
							Delete
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClientDetails;
