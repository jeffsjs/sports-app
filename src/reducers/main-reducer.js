import * as ACTIONS from '../actions/actions-types';

const INITIAL_STATE = {
	loading: false,
	error: false,
	errorMessage: '',
	users: []
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ACTIONS.LOAD:
		case ACTIONS.LOAD_USERS:
			return { ...state, loading: true };

		case ACTIONS.SUCCESS_USERS:
			return { ...state, users: [...action.payload], loading: false, error: false };

		case ACTIONS.SUCCESS_SAVE_USER:
			return { ...state, users: [...state.users, action.payload], loading: false, error: false };

		case ACTIONS.SUCCESS_INFO_USER:
			return {...state, users: addInfo(action.payload, state) };

		case ACTIONS.DELETE_USER:
			return {...state, users: deleteUser(action.payload, state) };
		
		case ACTIONS.SAVE_USER:
			return {...state, fields: updateField(action.payload, state) };

		case ACTIONS.FAILURE_USERS:
			return { ...state, loading: false, error: true, errorMessage: action.payload };
		default:
			return state;
	}
}

const addInfo = (payload, state) => {
	const { users } = state;
	const updateUser = users.map(user => user.id === payload.id ? {...user, ...payload} : user);
	return updateUser;
}

const deleteUser = (idUser, state) => {
	const { users } = state;
	return users.filter( user => user.id !== idUser );
};

const updateField = (payload, state) => {
	return {...state}
};
