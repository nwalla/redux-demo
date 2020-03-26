import { Reducer } from 'redux';
import { IUsersReducerState } from './types/users';
import {
	USERS_INCREMENT_NAVIGATION_CLICKS,
	USERS_SET_FIRST_NAME,
	USERS_SET_LAST_NAME,
	USERS_SET_PROPERTIES
} from '../../Actions';

const initialState: IUsersReducerState = {
	firstName: '',
	lastName: '',
	navigationClicks: 0,
};

export const UsersReducer: Reducer<IUsersReducerState> = ( state = initialState, action ) => {
	switch (action.type) {
		case USERS_INCREMENT_NAVIGATION_CLICKS:
			return { ...state, navigationClicks: ++state.navigationClicks };
		case USERS_SET_FIRST_NAME:
			return { ...state, firstName: action.payload };
		case USERS_SET_LAST_NAME:
			return { ...state, lastName: action.payload };
		case USERS_SET_PROPERTIES:
			return { ...state, ...action.payload };
		default:
			return { ...state };
	}
};
