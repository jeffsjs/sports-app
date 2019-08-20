import { takeLatest, takeEvery, put, call, all } from 'redux-saga/effects';
import * as ACTIONS from '../actions/actions-types';
import {
	getUsers,
	getPostsUserId,
	getPhotosUserId,
	getAlbumsUserId,
	getUsersDetaisId,
	getNewUsers,
	postSaveUser
} from '../api';

function* getUsersTask() {
	try {
		const response = yield call(getUsers);
		const responseNews = yield call(getNewUsers);
		const DEFAULT_VALUES = {
			ride: '',
			days: [],
			posts: 0,
			albums: 0,
			photos: 0
		};
		const data = response.data.map(e => ({ ...e, ...DEFAULT_VALUES }));
		const newsUsers = responseNews.data.filter(user => user.new);

		yield put({ type: ACTIONS.SUCCESS_USERS, payload: [...data, ...newsUsers] });
	} catch (err) {
		yield put({
			type: ACTIONS.FAILURE_USERS,
			payload: 'Erro ao carregar usuarios =/'
		});
	}
}
function* getInfoAll({ payload }) {
	try {
		yield all(
			payload.map(user => {
				return put({ type: ACTIONS.GET_INFO_USER, payload: user.id });
			})
		);

		yield put({ type: ACTIONS.SUCCESS_INFO_ALL, payload: payload });
	} catch (err) {
		yield put({
			type: ACTIONS.FAILURE_INFO_ALL,
			payload: 'Erro ao carregar informações!'
		});
	}
}

function* getInfoUserId({ payload }) {
	try {
		const [posts, photos, albums, datais] = yield all([
			call(getPostsUserId, payload),
			call(getPhotosUserId, payload),
			call(getAlbumsUserId, payload),
			call(getUsersDetaisId, payload)
		]);

		const postsLenght = posts.data.length;
		const photosLenght = photos.data.length;
		const albumsLenght = albums.data.length;
		const moreDetais = datais.data[0];

		yield put({
			type: ACTIONS.SUCCESS_INFO_USER,
			payload: {
				...moreDetais,
				id: payload,
				posts: postsLenght,
				photos: photosLenght,
				albums: albumsLenght
			}
		});
	} catch (err) {
		yield put({
			type: ACTIONS.FAILURE_INFO_USER,
			payload: 'Erro ao carregar informações!'
		});
	}
}

function* postUser({ payload }) {
	try {
		const response = yield call(postSaveUser, payload);

		yield put({ type: ACTIONS.SUCCESS_SAVE_USER, payload: response.data });
	} catch (err) {
		yield put({
			type: ACTIONS.FAILURE_SAVE_USER,
			payload: 'Erro ao salvar informações!'
		});
	}
}

export default function* root() {
	yield takeLatest(ACTIONS.LOAD_USERS, getUsersTask);
	yield takeEvery(ACTIONS.SUCCESS_USERS, getInfoAll);
	yield takeEvery(ACTIONS.GET_INFO_USER, getInfoUserId);
	yield takeEvery(ACTIONS.SAVE_USER, postUser);
}
