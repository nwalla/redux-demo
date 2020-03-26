import { Reducer } from 'redux';
import { INavigationState } from './types/navigationState';
import { NAVIGATION_CLOSE, NAVIGATION_OPEN, NAVIGATION_TOGGLE } from '../../Actions';

const initialState: INavigationState = {
	open: false
};

export const NavigationReducer: Reducer<INavigationState> = ( state = initialState, action ) => {

	switch (action.type) {
		case NAVIGATION_OPEN:
			return {...state, open: true};
		case NAVIGATION_CLOSE:
			return {...state, open: false};
		case NAVIGATION_TOGGLE:
			return {...state, open: !state.open};
		default:
			return { ...state };
	}
};
