import React, { useState } from 'react';

import SearchBar from '../common/SearchBar';
import CustomDialog from '../common/CustomDialog';

import '../styles/CommonStyles.css';

const ProjectFunctions = () => {
	const [showDialog, setShowDialog] = useState(false);
	const dialogTitle = 'Create new project';
	const dialogContent = (
		<ul className='form user-inputs'>
			<li>
				<label>Project name:</label>
				<input type='text' className='in-text user-inputs' />
			</li>
			<li>
				<label>Description:</label>
				<input type='text' className='in-text user-inputs' />
			</li>
			<li className='user-inputs'>
				<label>Customer:</label>
				<select>
					<option>Select customer</option>
					<option>Adam Software NV</option>
					<option>Clockwork</option>
					<option>Emperor Design</option>
				</select>
			</li>
			<li className='user-inputs'>
				<label>Lead:</label>
				<select>
					<option>Select lead</option>
					<option>Sasa Popovic</option>
					<option>Sladjana Miljanovic</option>
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
					Create new project
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

export default ProjectFunctions;
