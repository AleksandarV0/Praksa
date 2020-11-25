import { combineReducers } from 'redux';

import { clientReducer } from './clientReducer';
import { paginationReducer } from './paginationReducer';
import { alphabetFilterReducer } from './alphabetFilterReducer';
import { countryListReducer } from './countryListReducer';

const allReducers = combineReducers({
	clientReducer,
	paginationReducer,
	alphabetFilterReducer,
	countryListReducer,
});

export default allReducers;
