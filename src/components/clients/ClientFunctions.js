import React, { useState } from 'react';

import SearchBar from '../common/SearchBar';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../styles/ClientFunctions.css';

const ClientFunctions = () => {
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
					href='#new-client'
					className='link new-member-popup'
					onClick={onOpenModal}>
					Create new client
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
						<h2>Create new client</h2>
						<ul className='form'>
							<li>
								<label>Client name:</label>
								<input type='text' className='in-text' />
							</li>
							<li>
								<label>Address:</label>
								<input type='text' className='in-text' />
							</li>
							<li>
								<label>City:</label>
								<input type='text' className='in-text' />
							</li>
							<li>
								<label>Zip/Postal code:</label>
								<input type='text' className='in-text' />
							</li>
							<li>
								<label>Country:</label>
								<select>
									<option>Select country</option>
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

export default ClientFunctions;
