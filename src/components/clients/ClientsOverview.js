import React from 'react';

//Default imports
import Pagination from '../common/Pagination';
import AlphabeticalFilter from '../common/AlphabeticalFilter';
import ClientFunctions from './ClientFunctions';
import AllClients from './AllClients';
import { ToastProvider } from 'react-toast-notifications';

const ClientsOverview = () => {
	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>
					<i className='ico clients'></i>Clients
				</h2>
				<ToastProvider>
					<ClientFunctions />
					<AlphabeticalFilter />
					<AllClients />
					<Pagination />
				</ToastProvider>
			</section>
		</div>
	);
};

export default ClientsOverview;
