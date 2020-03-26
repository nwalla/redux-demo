import { Action } from 'redux';
import { MapDispatchToProps, MapStateToProps, MergeProps } from 'react-redux';
import { getNavigationOpen, getUserNavigationClicks } from '../../store/Selectors';
import { toggleNavigation, openNavigation, closeNavigation, toggleNavigationWithMiddleWare } from '../../store/ActionCreators';

import { IRootState } from '../../store/Reducers/types';
import { NAVIGATION_CLOSE, NAVIGATION_OPEN, NAVIGATION_TOGGLE, NAVIGATION_TOGGLE_MW } from '../../store/Actions';

export interface IOwnProps {
	multiplier: number
}

export interface IStateProps {
	navState: boolean;
	navStateText: 'open' | 'closed';
	navigationClicks: number;
}

export interface IDispatchProps {
	toggleNavigation: () => Action<typeof NAVIGATION_TOGGLE>,
	toggleNavigationWithMiddleWare: () => Action<typeof NAVIGATION_TOGGLE_MW>,
	closeNavigation: () => Action<typeof NAVIGATION_CLOSE>,
	openNavigation: () => Action<typeof NAVIGATION_OPEN>
}

export interface IMergedProps extends IDispatchProps, IStateProps, IOwnProps {
	multipliedCount: number;
	
}

export const mapStateToProps: MapStateToProps<IStateProps, IOwnProps , IRootState> = ( state, ownProps ) => {
	const navState = getNavigationOpen(state);
	return {
		navState,
		navStateText: navState ? 'open' : 'closed',
		navigationClicks: getUserNavigationClicks(state),
	};
};

export const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IOwnProps> = ( dispatch, ownProps ) => {
	return {
		// Useful when passing payload from component to redux - this example does not utilize that functionality
		toggleNavigation: () => dispatch(toggleNavigation), // return action object
		toggleNavigationWithMiddleWare: () => dispatch(toggleNavigationWithMiddleWare),
		closeNavigation: () => dispatch(closeNavigation),
		openNavigation: () => dispatch(openNavigation)
	};
};

/* Alternatively
 export const mapDispatchToProps: = ( dispatch, ownProps ) => bindActionCreators(
 {
 toggleNavigation,
 toggleNavigationWithMiddleWare,
 closeNavigation,
 openNavigation
 },
 dispatch);
 */

export const mergeProps: MergeProps<IStateProps,
	IDispatchProps,
	IOwnProps,
	IMergedProps> = ( propsFromState, propsFromDispatch, ownProps ) => {
	// this is usually reserved for returning props that merge State and dispatch ie
	// multiplyCount: propsFromDispatch.multiply(propsFromState.navigationClicks.count)
	return {
		// bad example because this belongs in the mapStateToProps
		...propsFromState,
		...propsFromDispatch,
		...ownProps,
		multipliedCount: ( ownProps.multiplier | 1) * propsFromState.navigationClicks,
	};
};
