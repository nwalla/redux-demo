import {combineReducers} from 'redux';
import { IRootState } from './types';
import { AppReducer } from './App';
import { UsersReducer } from './Users';

export const rootReducer = combineReducers<IRootState>({
	app: AppReducer,
	users: UsersReducer
});
