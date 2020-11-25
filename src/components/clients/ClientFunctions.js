import React, { useState } from 'react';

import SearchBar from '../common/SearchBar';
import 'react-responsive-modal/styles.css';
import '../styles/ClientFunctions.css';
import AddNewClientModal from './AddNewClientModal';

const ClientFunctions = () => {
	const [open, setOpen] = useState(false);

	const onOpenModal = (e) => {
		e.preventDefault();
		setOpen(true);
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
			<AddNewClientModal open={open} setOpen={setOpen} />
		</>
	);
};

export default ClientFunctions;
