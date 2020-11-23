import { ACTION_TYPES } from '../actions/paginationActions';

const initialState = {
	currentPage: 1,
	entityToDisplayCount: 0,
};

export const paginationReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.SELECT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			};
		case ACTION_TYPES.NEXT_PAGE:
			return {
				...state,
				currentPage: state.currentPage + 1,
			};
		case ACTION_TYPES.RESET:
			return {
				currentPage: 1,
				entityToDisplayCount: 0,
			};
		case ACTION_TYPES.SET_DISPLAY_PAGES:
			return {
				...state,
				entityToDisplayCount: action.payload,
			};
		default:
			return state;
	}
};
