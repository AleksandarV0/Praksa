import { combineReducers } from 'redux';

import { clientReducer } from './clientReducer';
import { paginationReducer } from './paginationReducer';
import { alphabetFilterReducer } from './alphabetFilterReducer';

const allReducers = combineReducers({
	clientReducer,
	paginationReducer,
	alphabetFilterReducer,
});

export default allReducers;
