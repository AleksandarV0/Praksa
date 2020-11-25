import { ACTION_TYPES } from '../actions/clientActions';

const initialState = {
	allClients: [
		{
			clientID: 1,
			clientName: 'Crytek GmbH',
			address: 'address1',
			city: 'city1',
			zipCode: 'zipcode1',
			country: 'Serbia',
		},
		{
			clientID: 2,
			clientName: 'Google',
			address: 'address2',
			city: 'city2',
			zipCode: 'zipcode2',
			country: 'China',
		},
		{
			clientID: 3,
			clientName: 'Facebook',
			address: 'address3',
			city: 'city3',
			zipCode: 'zipcode3',
			country: 'Russia',
		},
		{
			clientID: 4,
			clientName: 'Youtube',
			address: 'address4',
			city: 'city4',
			zipCode: 'zipcode4',
			country: 'Hungary',
		},
		{
			clientID: 5,
			clientName: 'Continental',
			address: 'address5',
			city: 'city5',
			zipCode: 'zipcode5',
			country: 'country5',
		},
		{
			clientID: 6,
			clientName: 'SoundCloud',
			address: 'address6',
			city: 'city6',
			zipCode: 'zipcode6',
			country: 'country6',
		},
		{
			clientID: 7,
			clientName: 'ZTN',
			address: 'address7',
			city: 'city7',
			zipCode: 'zipcode7',
			country: 'country7',
		},
		{
			clientID: 8,
			clientName: 'Core8',
			address: 'address8',
			city: 'city8',
			zipCode: 'zipcode8',
			country: 'country8',
		},
		{
			clientID: 9,
			clientName: 'Cnfinitum',
			address: 'address9',
			city: 'city9',
			zipCode: 'zipcode9',
			country: 'country9',
		},
		{
			clientID: 10,
			clientName: 'cCordram',
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
