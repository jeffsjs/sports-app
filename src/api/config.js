import axios from 'axios';
import config from '../config';

const instance = axios.create({
	baseURL: config.baseURL,
	timeout: 60000,
	headers: {
	}
});

// instance.interceptors.request.use(configs => ({
// 	...configs,
// 	params: {
// 		...configs.params
// 	}
// }));

const instanceApi = axios.create({
	baseURL: config.api,
	timeout: 60000,
	headers: {
	}
});


export default { instance, instanceApi };
