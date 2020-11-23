import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ClientDetails from './ClientDetails';
import * as paginationActions from '../../services/redux/actions/paginationActions';
import * as alphabetFilterActions from '../../services/redux/actions/alphabetFilterActions';

const AllClients = ({
	allClients,
	currentPage,
	currentLetter,
	setEntityToDisplayCount,
	setAllLetters,
}) => {
	const [displayedClients, setDisplayedClients] = useState([]);

	useEffect(() => {
		var allLetters = [];
		allClients.map((client) => {
			if (!allLetters.includes(client.companyName.toLowerCase().charAt(0))) {
				allLetters.push(client.companyName.toLowerCase().charAt(0));
			}
		});
		setAllLetters(allLetters);
	}, []);

	useEffect(() => {
		var prepareClients = allClients.slice();
		if (currentLetter !== '') {
			prepareClients = prepareClients.filter((x) =>
				x.companyName.toLowerCase().startsWith(currentLetter)
			);
		}
		setEntityToDisplayCount(prepareClients.length);
		setDisplayedClients(
			prepareClients.slice(currentPage * 5 - 5, currentPage * 5)
		);
	}, [currentPage, currentLetter]);

	return (
		<div className='accordion-wrap clients'>
			{displayedClients.map((client) => (
				<ClientDetails key={client.clientID} client={client} />
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		allClients: state.clientReducer.allClients,
		currentPage: state.paginationReducer.currentPage,
		currentLetter: state.alphabetFilterReducer.currentLetter,
	};
};

const mapActionToProps = {
	setEntityToDisplayCount: paginationActions.setEntityToDisplayCount,
	setAllLetters: alphabetFilterActions.setAllLetters,
};

export default connect(mapStateToProps, mapActionToProps)(AllClients);
