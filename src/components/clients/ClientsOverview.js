import React from 'react';

import Pagination from '../common/Pagination';
import AlphabeticalFilter from '../common/AlphabeticalFilter';
import ClientFunctions from './ClientFunctions';
import AllClients from './AllClients';

const ClientsOverview = () => {
	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>
					<i className='ico clients'></i>Clients
				</h2>
				<ClientFunctions />
				<AlphabeticalFilter />
				<AllClients />
				<Pagination />
			</section>
		</div>
	);
};

export default ClientsOverview;
