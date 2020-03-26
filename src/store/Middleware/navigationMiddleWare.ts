import {ThunkMiddleware} from 'redux-thunk';
import { NAVIGATION_TOGGLE_MW } from '../Actions';
import { incrementUserNavigationClicks } from '../ActionCreators/users';
import { IRootState } from '../Reducers/types';

export const navigationMiddleWare: ThunkMiddleware<IRootState> = store => next => action => {
	if (action.type === NAVIGATION_TOGGLE_MW) {
		store.dispatch(incrementUserNavigationClicks);
	}
	return next(action);
};
