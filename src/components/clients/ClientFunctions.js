import React, { useState } from 'react';

import SearchBar from '../common/SearchBar';
import CustomDialog from '../common/CustomDialog';
import '../styles/ClientFunctions.css';

const ClientFunctions = () => {
	const [showDialog, setShowDialog] = useState(false);
	const dialogTitle = 'Create new client';
	const dialogContent = (
		<ul className='form user-inputs'>
			<li>
				<label>Client name:</label>
				<input type='text' className='in-text user-inputs' />
			</li>
			<li>
				<label>Address:</label>
				<input type='text' className='in-text user-inputs' />
			</li>
			<li>
				<label>City:</label>
				<input type='text' className='in-text user-inputs' />
			</li>
			<li>
				<label>Zip/Postal code:</label>
				<input type='text' className='in-text user-inputs' />
			</li>
			<li>
				<label>Country:</label>
				<select>
					<option>Select country</option>
				</select>
			</li>
		</ul>
	);

	return (
		<>
			<div className='grey-box-wrap reports'>
				<a
					href='#new-member'
					className='link new-member-popup'
					onClick={() => setShowDialog(true)}>
					Create new client
				</a>
				<SearchBar />
			</div>
			<CustomDialog
				showDialog={showDialog}
				setShowDialog={setShowDialog}
				dialogTitleText={dialogTitle}
				dialogContentText={dialogContent}
				parent='Projects'
				buttonText='Save'
			/>
		</>
	);
};

export default ClientFunctions;
