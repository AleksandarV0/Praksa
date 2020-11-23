import { ACTION_TYPES } from '../actions/alphabetFilterActions';

const initialState = {
	currentLetter: '',
	allAvailableLetters: [],
};

export const alphabetFilterReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.SELECT_LETTER:
			return {
				...state,
				currentLetter: action.payload,
			};
		case ACTION_TYPES.CLEAR_LETTER:
			return {
				...state,
				currentLetter: '',
			};
		case ACTION_TYPES.SET_ALL_LETTERS:
			return {
				...state,
				allAvailableLetters: action.payload,
			};

		default:
			return state;
	}
};
