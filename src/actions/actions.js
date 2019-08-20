import * as ACTIONS from './actions-types';

export const load = () => ({
  type: ACTIONS.LOAD
});

export const getUsers = payload => ({
  type: ACTIONS.LOAD_USERS,
  payload: payload
});

export const getPosts = payload => ({
  type: ACTIONS.GET_POSTS,
  payload: payload
});

export const getAlbums = payload => ({
  type: ACTIONS.GET_ALBUMS,
  payload: payload
});

export const deleteUser = payload => ({
  type: ACTIONS.DELETE_USER,
  payload: payload
});

export const saveUser = payload => ({
  type: ACTIONS.SAVE_USER,
  payload: payload
});



