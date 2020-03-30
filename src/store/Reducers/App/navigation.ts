import { Reducer } from 'redux';
import { INavigationState } from './types/navigationState';
import { NAVIGATION_CLOSE, NAVIGATION_OPEN, NAVIGATION_TOGGLE, NAVIGATION_TOGGLE_MW } from '../../Actions';

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
		case NAVIGATION_TOGGLE_MW:
			return {...state, open: !state.open};
		default:
			return { ...state };
	}
};
