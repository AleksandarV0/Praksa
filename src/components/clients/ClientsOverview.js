import React, { useState, useEffect } from 'react';

//Default imports
import Pagination from '../common/Pagination';
import AlphabeticalFilter from '../common/AlphabeticalFilter';
import ClientFunctions from './ClientFunctions';
import AllClients from './AllClients';

//Services
import { FetchAllClients } from '../../services/ClientServices';

const ClientsOverview = () => {
	const [allClients, setAllClients] = useState([]);
	useEffect(() => {
		// ! Spinner starts
		setAllClients(FetchAllClients());
		// ! Spinner ends
	}, []);
	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>
					<i className='ico clients'></i>Clients
				</h2>
				<ClientFunctions />
				<AlphabeticalFilter />
				<AllClients allClients={allClients} />
				<Pagination />
			</section>
		</div>
	);
};

export default ClientsOverview;
// import React, { Component } from 'react';

// //Default imports
// import Pagination from '../common/Pagination';
// import AlphabeticalFilter from '../common/AlphabeticalFilter';
// import ClientFunctions from './ClientFunctions';
// import AllClients from './AllClients';

// import $ from 'jquery';

// import { FetchAllClients } from '../../services/ClientServices';

// export default class ClientsOverview extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { allClients: [] };
// 	}

// 	componentDidMount() {
// 		var heading = '.accordion-wrap .heading';
// 		$(heading).click(function () {
// 			if (!$(this).parent().hasClass('open')) {
// 				$(this).parent().addClass('open');
// 				$(this).next().slideDown('normal');
// 			} else {
// 				$(this).parent().removeClass('open');
// 				$(this).next().slideUp('normal');
// 			}
// 		});

// 		this.setState({
// 			allClients: FetchAllClients(),
// 		});
// 	}

// 	render() {
// 		return (
// 			<div className='wrapper'>
// 				<section className='content'>
// 					<h2>
// 						<i className='ico clients'></i>Clients
// 					</h2>
// 					<ClientFunctions />
// 					<AlphabeticalFilter />
// 					<AllClients allClients={this.state.allClients} />
// 					<Pagination />
// 				</section>
// 			</div>
// 		);
// 	}
// }
