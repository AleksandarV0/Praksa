import { ACTION_TYPES } from '../actions/clientActions';

const initialState = {
	allClients: [
		{
			clientID: 1,
			companyName: 'Crytek GmbH',
			clientName: 'client name1',
			address: 'address1',
			city: 'city1',
			zipCode: 'zipcode1',
			country: 'country1',
		},
		{
			clientID: 2,
			companyName: 'Google',
			clientName: 'client name2',
			address: 'address2',
			city: 'city2',
			zipCode: 'zipcode2',
			country: 'country2',
		},
		{
			clientID: 3,
			companyName: 'Facebook',
			clientName: 'client name3',
			address: 'address3',
			city: 'city3',
			zipCode: 'zipcode3',
			country: 'country3',
		},
		{
			clientID: 4,
			companyName: 'Youtube',
			clientName: 'client name4',
			address: 'address4',
			city: 'city4',
			zipCode: 'zipcode4',
			country: 'country4',
		},
		{
			clientID: 5,
			companyName: 'Continental',
			clientName: 'client name5',
			address: 'address5',
			city: 'city5',
			zipCode: 'zipcode5',
			country: 'country5',
		},
		{
			clientID: 6,
			companyName: 'SoundCloud',
			clientName: 'client name6',
			address: 'address6',
			city: 'city6',
			zipCode: 'zipcode6',
			country: 'country6',
		},
		{
			clientID: 7,
			companyName: 'CTN',
			clientName: 'client name7',
			address: 'address7',
			city: 'city7',
			zipCode: 'zipcode7',
			country: 'country7',
		},
		{
			clientID: 8,
			companyName: 'Core8',
			clientName: 'client name8',
			address: 'address8',
			city: 'city8',
			zipCode: 'zipcode8',
			country: 'country8',
		},
		{
			clientID: 9,
			companyName: 'Cnfinitum',
			clientName: 'client name9',
			address: 'address9',
			city: 'city9',
			zipCode: 'zipcode9',
			country: 'country9',
		},
		{
			clientID: 10,
			companyName: 'Cordram',
			clientName: 'client name10',
			address: 'address10',
			city: 'city10',
			zipCode: 'zipcode10',
			country: 'country10',
		},
	],
};

export const clientReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.FETCH_ALL:
			return {
				...state,
				allClients: [...action.payload],
			};
		default:
			return state;
	}
};
