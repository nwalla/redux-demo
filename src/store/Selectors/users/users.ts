import { IRootState } from '../../Reducers/types';

export const getUserNavigationClicks = (state: IRootState): number => state.users.navigationClicks;
