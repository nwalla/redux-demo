import { IAppReducerState } from '../App/types/appReducer';
import { IUsersReducerState } from '../Users/types/users';

export interface IRootState{
	app: IAppReducerState,
	users: IUsersReducerState
}
