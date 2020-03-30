import { combineReducers } from 'redux';
import { IAppReducerState } from './types/appReducer';
import { NavigationReducer } from './navigation';


export const AppReducer = combineReducers<IAppReducerState>({
	navigation: NavigationReducer
});
