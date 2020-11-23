import api from './api';

export const ACTION_TYPES = {
	CREATE: 'CREATE',
	UPDATE: 'UPDATE',
	DELETE: 'DELETE',
	FETCH_ALL: 'FETCH_ALL',
};

export const createClient = (data) => {
	return {
		type: ACTION_TYPES.CREATE,
		payload: data,
	};
};

// export const fetchAll = () => {
// 	api
// 		.Clients()
// 		.fetchAll()
// 		.then((response) => {
// 			dispatch({
// 				type: ACTION_TYPES.FETCH_ALL,
// 				payload: response.data,
// 			});
// 		})
// 		.catch((err) => console.log('Fetch all clients error> ', err));
// };
