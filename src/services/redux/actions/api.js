import axios from 'axios';

const baseUrl = 'localhost:8080/api/';

export default {
	Clients(url = baseUrl + 'clients/') {
		return {
			fetchAll: () => axios.get(url),
			fetchById: (id) => axios.get(url + id),
			create: (newClient) => axios.post(url, newClient),
			update: (id, updatedClient) => axios.put(url + id, updatedClient),
			delete: (id) => axios.delete(url + id),
		};
	},
};
