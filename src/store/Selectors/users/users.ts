import { createSelector } from 'reselect';
import { IRootState } from '../../Reducers/types';


export const getUserNavigationClicks = ( state: IRootState ): number => state.users.navigationClicks;


// Not in redux-demo app. only example of how to combine selectors for calculated response
const exampleMultiplier = ( state: IRootState ) => 72;
export const ExampleUserClickMultiplier = createSelector(
	getUserNavigationClicks,
	exampleMultiplier,
	(clicks, mult) => clicks * mult
);
