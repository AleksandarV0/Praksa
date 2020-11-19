import React, { useState } from 'react';

import { Modal } from 'react-responsive-modal';
import '../styles/CommonStyles.css';
import 'react-responsive-modal/styles.css';

const TeamMemberFunctions = () => {
	const [open, setOpen] = useState(false);

	const onOpenModal = (e) => {
		e.preventDefault();
		setOpen(true);
	};
	const onCloseModal = (e) => {
		e.preventDefault();
		setOpen(false);
	};

	return (
		<>
			<div className='grey-box-wrap reports ico-member'>
				<a
					href='#new-member'
					className='link new-member-popup test'
					onClick={onOpenModal}>
					<span>Create new member</span>
				</a>
			</div>
			<div style={{ position: 'relative' }}>
				<Modal
					open={open}
					showCloseIcon={false}
					onClose={() => setOpen(false)}
					center>
					<a
						id='fancybox-close'
						style={{ display: 'inline' }}
						onClick={onCloseModal}></a>
					<div id='new-member' className='new-member-inner'>
						<h2>Create new team member</h2>
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
						<div className='buttons'>
							<div className='inner'>
								<a href='/' className='btn green'>
									Invite team member
								</a>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		</>
	);
};

export default TeamMemberFunctions;
