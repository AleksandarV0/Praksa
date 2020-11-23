export const ACTION_TYPES = {
	SET_DISPLAY_PAGES: 'SET_DISPLAY_PAGES',
	SELECT_PAGE: 'SELECT_PAGE',
	NEXT_PAGE: 'NEXT_PAGE',
	RESET: 'RESET',
};

export const selectPage = (data) => {
	return {
		type: ACTION_TYPES.SELECT_PAGE,
		payload: data,
	};
};

export const nextPage = () => {
	return {
		type: ACTION_TYPES.NEXT_PAGE,
	};
};

export const reset = () => {
	return {
		type: ACTION_TYPES.RESET,
	};
};

export const setEntityToDisplayCount = (data) => {
	return {
		type: ACTION_TYPES.SET_DISPLAY_PAGES,
		payload: data,
	};
};
