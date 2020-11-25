import { ACTION_TYPES } from '../actions/countryListActions';

const initialState = {
	countryList: ['China', 'Serbia', 'Hungary', 'Russia'],
};

export const countryListReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.SET_COUNTRY_LIST:
			return {
				countryList: action.payload,
			};
		case ACTION_TYPES.CLEAR_COUNTRY_LIST:
			return {
				countryList: [],
			};
		case ACTION_TYPES.GET_COUNTRY_LIST:
		default:
			return state;
	}
};
