import React, { useState } from 'react';

import CustomDialog from '../common/CustomDialog';
import '../styles/CommonStyles.css';

const TeamMemberFunctions = () => {
	const [showDialog, setShowDialog] = useState(false);
	const dialogTitle = 'Create new team member';
	const dialogContent = (
		<ul className='form user-inputs'>
			<li>
				<label>Name:</label>
				<input type='text' className='in-text user-inputs' />
			</li>
			<li>
				<label>Hours per week:</label>
				<input type='text' className='in-text user-inputs' />
			</li>
			<li>
				<label>Username:</label>
				<input type='text' className='in-text user-inputs' />
			</li>
			<li>
				<label>Email:</label>
				<input type='text' className='in-text user-inputs' />
			</li>
			<li className='inline'>
				<label>Status:</label>
				<span className='radio'>
					<label for='inactive'>Inactive:</label>
					<input type='radio' value='1' name='status' id='inactive' />
				</span>
				<span className='radio'>
					<label for='active'>Active:</label>
					<input type='radio' value='2' name='status' id='active' />
				</span>
			</li>
			<li className='inline'>
				<label>Role:</label>
				<span className='radio'>
					<label for='admin'>Admin:</label>
					<input type='radio' value='1' name='status' id='admin' />
				</span>
				<span className='radio'>
					<label for='worker'>Worker:</label>
					<input type='radio' value='2' name='status' id='worker' />
				</span>
			</li>
		</ul>
	);
	return (
		<>
			<div className='grey-box-wrap reports ico-member'>
				<a
					href='#new-member'
					className='link new-member-popup test'
					onClick={() => setShowDialog(true)}>
					<span>Create new member</span>
				</a>
			</div>
			<CustomDialog
				showDialog={showDialog}
				setShowDialog={setShowDialog}
				dialogTitleText={dialogTitle}
				dialogContentText={dialogContent}
				parent='Projects'
				buttonText='Invite team member'
			/>
		</>
	);
};

export default TeamMemberFunctions;
