import { INavigationCloseAction, INavigationOpenAction, INavigationToggleAction, INavigationToggleActionMW } from './types/navigation';
import { NAVIGATION_CLOSE, NAVIGATION_OPEN, NAVIGATION_TOGGLE, NAVIGATION_TOGGLE_MW } from '../../Actions';

export const toggleNavigation: INavigationToggleAction = { type: NAVIGATION_TOGGLE };
export const toggleNavigationWithMiddleWare: INavigationToggleActionMW = { type: NAVIGATION_TOGGLE_MW };
export const openNavigation: INavigationOpenAction = { type: NAVIGATION_OPEN };
export const closeNavigation: INavigationCloseAction = { type: NAVIGATION_CLOSE };
