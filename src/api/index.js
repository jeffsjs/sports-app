import config from './config';
const { instance, instanceApi } = config;

export const getUsers = () => {
	return instance.get('/users');
};
export const getPostsUserId = (idUser) => {
	return instance.get(`/posts/?userId=${idUser}`);
};
export const getAlbumsUserId = (idUser) => {
	return instance.get(`/albums/?userId=${idUser}`);
};
export const getPhotosUserId = (idUser) => {
	return instance.get(`/photos/?userId=${idUser}`);
};


export const getNewUsers = () => {
	return instanceApi.get(`/users`);
};
export const getUsersDetaisId = (idUser) => {
	return instanceApi.get(`/users?id=${idUser}`);
};
export const postSaveUser = (params) => {
	return instanceApi.post('/users', params);
};