import { IRootState } from '../../Reducers/types';

export const getNavigationOpen = ( state: IRootState ): boolean => state.app.navigation.open;
