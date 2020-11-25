import React from 'react';
import { connect } from 'react-redux';

import { Modal } from 'react-responsive-modal';
import ReusableFormFunctions from '../common/ReusableFormFunctions';
import { InitialClientModel } from '../../models/clients';
import '../styles/CommonStyles.css';
import { useToasts } from 'react-toast-notifications';

const AddNewClientModal = ({ open, setOpen, allCountries }) => {
	const { addToast } = useToasts();

	const submitNewClient = (e) => {
		e.preventDefault();
		if (validate()) {
			console.log('Submitted -> ', values);
			setValues(InitialClientModel);
			setOpen(false);
			addToast('New client added successfully', {
				appearance: 'success',
				autoDismiss: 'true',
				autoDismissTimeout: '3000',
			});
		} else {
			addToast('Oops. Are you missed something?', {
				appearance: 'warning',
				autoDismiss: 'true',
				autoDismissTimeout: '3000',
			});
		}
	};

	const onCloseModal = (e) => {
		e.preventDefault();
		setValues(InitialClientModel);
		setErrors({});
		setOpen(false);
	};

	const onCloseModalWithoutE = () => {
		setValues(InitialClientModel);
		setErrors({});
		setOpen(false);
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
	} = ReusableFormFunctions(InitialClientModel, validate);

	return (
		<div style={{ position: 'relative' }}>
			<Modal
				open={open}
				showCloseIcon={false}
				onClose={onCloseModalWithoutE}
				center>
				<a
					id='fancybox-close'
					style={{ display: 'inline' }}
					onClick={onCloseModal}></a>
				<div id='new-member' className='new-member-inner'>
					<h2>Create new client</h2>
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
							<label>City:</label>
							<input
								type='text'
								className={`in-text ${errors.city ? 'danger' : ''}`}
								name='city'
								value={values.city}
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
						<li>
							<label>Country:</label>
							<select
								name='country'
								value={values.country}
								onChange={handleInputChange}
								className={`in-text full-width ${
									errors.country ? 'danger' : ''
								}`}>
								<option value=''>Select country</option>
								{allCountries.map((country) => (
									<option value={country}>{country}</option>
								))}
							</select>
						</li>
					</ul>
					<div className='buttons'>
						<div className='inner'>
							<a href='/' className='btn green' onClick={submitNewClient}>
								Save
							</a>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		allCountries: state.countryListReducer.countryList,
	};
};

export default connect(mapStateToProps)(AddNewClientModal);
