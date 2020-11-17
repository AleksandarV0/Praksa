import React from 'react';

import ClientDetails from './ClientDetails';

const AllClients = () => {
	return (
		<div className='accordion-wrap clients'>
			{[0, 1, 2].map((example) => (
				<ClientDetails key={Math.random()} />
			))}
		</div>
	);
};

export default AllClients;
