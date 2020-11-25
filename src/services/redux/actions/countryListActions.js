export const ACTION_TYPES = {
	GET_COUNTRY_LIST: 'GET_COUNTRY_LIST',
	SET_COUNTRY_LIST: 'SET_COUNTRY_LIST',
	CLEAR_COUNTRY_LIST: 'CLEAR_COUNTRY_LIST',
};

export const getCountryList = () => {
	return {
		type: ACTION_TYPES.GET_COUNTRY_LIST,
	};
};

export const setCountryList = (data) => {
	return {
		type: ACTION_TYPES.SET_COUNTRY_LIST,
		payload: data,
	};
};

export const clearCountryList = () => {
	return {
		type: ACTION_TYPES.CLEAR_COUNTRY_LIST,
	};
};
