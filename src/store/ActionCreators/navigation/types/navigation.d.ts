import { Action } from 'redux';
import { NAVIGATION_CLOSE, NAVIGATION_OPEN, NAVIGATION_TOGGLE, NAVIGATION_TOGGLE_MW } from '../../../Actions';

export interface INavigationOpenAction extends Action {
	type: typeof NAVIGATION_OPEN;
}

export interface INavigationCloseAction extends Action {
	type: typeof NAVIGATION_CLOSE;
}

export interface INavigationToggleAction extends Action {
	type: typeof NAVIGATION_TOGGLE;
}

export interface INavigationToggleActionMW extends Action {
	type: typeof NAVIGATION_TOGGLE_MW;
}

