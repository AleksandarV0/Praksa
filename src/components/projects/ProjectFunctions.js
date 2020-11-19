import React, { useState } from 'react';

import SearchBar from '../common/SearchBar';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../styles/CommonStyles.css';

const ProjectFunctions = () => {
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
			<div className='grey-box-wrap reports'>
				<a
					href='#new-member'
					className='link new-member-popup'
					onClick={onOpenModal}>
					Create new project
				</a>
				<SearchBar />
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
						<h2>Create new project</h2>
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
						<div className='buttons'>
							<div className='inner'>
								<a href='/' className='btn green'>
									Save
								</a>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		</>
	);
};

export default ProjectFunctions;
