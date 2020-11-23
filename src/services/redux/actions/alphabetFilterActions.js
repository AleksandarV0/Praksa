export const ACTION_TYPES = {
	SELECT_LETTER: 'SELECT_LETTER',
	CLEAR_LETTER: 'CLEAR_LETTER',
	SET_ALL_LETTERS: 'SET_ALL_LETTERS',
};

export const selectLetter = (data) => {
	return {
		type: ACTION_TYPES.SELECT_LETTER,
		payload: data,
	};
};

export const clearLetter = () => {
	return {
		type: ACTION_TYPES.CLEAR_LETTER,
	};
};

export const setAllLetters = (data) => {
	return {
		type: ACTION_TYPES.SET_ALL_LETTERS,
		payload: data,
	};
};
