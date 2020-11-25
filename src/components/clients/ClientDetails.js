import React, { useEffect, useState } from 'react';

import $ from 'jquery';
import ReusableFormFunctions from '../common/ReusableFormFunctions';
import '../styles/CommonStyles.css'; // danger
import { useToasts } from 'react-toast-notifications';

const ClientDetails = ({ client, allCountries }) => {
	const [accordionOpened, setAccordionOpened] = useState(false);
	const { addToast } = useToasts();

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

	const submitChanges = (e) => {
		e.preventDefault();
		if (validate()) {
			if (values != client) {
				addToast('Client successfully modified', {
					appearance: 'success',
					autoDismiss: 'true',
					autoDismissTimeout: '3000',
				});
			} else {
				addToast('There was no changes', {
					appearance: 'info',
					autoDismiss: 'true',
					autoDismissTimeout: '3000',
				});
			}
		} else {
			addToast('Oops. Are you missed something?', {
				appearance: 'warning',
				autoDismiss: 'true',
				autoDismissTimeout: '3000',
			});
		}
	};

	const deleteElement = (e) => {
		e.preventDefault();
		addToast('Client successfully deleted', {
			appearance: 'error',
			autoDismiss: 'true',
			autoDismissTimeout: '3000',
		});
	};

	const validate = (fieldValues = values) => {
		let errorObject = {};
		if ('clientName' in fieldValues)
			errorObject.clientName = fieldValues.clientName
				? ''
				: 'Client name cannot be empty';
		if ('address' in fieldValues)
			errorObject.address = fieldValues.address
				? ''
				: 'Address cannot be empty';
		if ('city' in fieldValues)
			errorObject.city = fieldValues.city ? '' : 'City cannot be empty';
		if ('country' in fieldValues)
			errorObject.country = fieldValues.country
				? ''
				: 'Country cannot be empty';
		if ('zipCode' in fieldValues)
			errorObject.zipCode = fieldValues.zipCode
				? ''
				: 'Zip code cannot be empty';

		setErrors({
			...errors,
			...errorObject,
		});
		if (fieldValues == values)
			return Object.values(errorObject).every((x) => x === '');
	};

	const {
		values,
		setValues,
		errors,
		setErrors,
		handleInputChange,
	} = ReusableFormFunctions(client, validate);

	return (
		<div
			className={accordionOpened === true ? 'item open' : 'item'}
			onClick={toggleAccordian}>
			<div className='heading'>
				<span>{client.clientName}</span>
				<i>+</i>
			</div>
			<div className='details'>
				<ul className='form'>
					<li>
						<label>Client name:</label>
						<input
							type='text'
							className={`in-text ${errors.clientName ? 'danger' : ''}`}
							name='clientName'
							value={values.clientName}
							onChange={handleInputChange}
						/>
					</li>
					<li>
						<label>Zip/Postal code:</label>
						<input
							type='text'
							className={`in-text ${errors.zipCode ? 'danger' : ''}`}
							name='zipCode'
							value={values.zipCode}
							onChange={handleInputChange}
						/>
					</li>
				</ul>
				<ul className='form'>
					<li>
						<label>Address:</label>
						<input
							type='text'
							className={`in-text ${errors.address ? 'danger' : ''}`}
							name='address'
							value={values.address}
							onChange={handleInputChange}
						/>
					</li>
					<li>
						<label>Country:</label>
						{console.log(values.country)}
						<select
							name='country'
							value={values.country}
							onChange={handleInputChange}
							className={`in-text ${errors.country ? 'danger' : ''}`}>
							<option value=''>Select country</option>
							{allCountries.map((country) => (
								<option value={country}>{country}</option>
							))}
						</select>
					</li>
				</ul>
				<ul className='form last'>
					<li>
						<label>City:</label>
						<input
							type='text'
							className={`in-text ${errors.city ? 'danger' : ''}`}
							name='city'
							value={values.city}
							onChange={handleInputChange}
						/>
					</li>
				</ul>

				<div className='buttons'>
					<div className='inner'>
						<a
							href='/'
							className='btn green margin-right'
							onClick={submitChanges}>
							Save
						</a>
						<a href='/' className='btn red' onClick={deleteElement}>
							Delete
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClientDetails;
