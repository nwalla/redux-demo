import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { IDispatchProps, IMergedProps, IOwnProps, IStateProps, mapDispatchToProps, mapStateToProps, mergeProps } from './Alt.connect';
import { BrowserRouterProps } from 'react-router-dom';
import { IRootState } from '../../store/Reducers/types';

type TConnectProps = IMergedProps & BrowserRouterProps;

class Alt extends PureComponent<TConnectProps ,{}> {
	render() {
		const {
			navState,
			navStateText,
			multipliedCount,
			multiplier,
			toggleNavigation,
			openNavigation,
			closeNavigation,
			navigationClicks,
			toggleNavigationWithMiddleWare
		} = this.props;
		return (
			<div>
				<header className="App-header">
					Alt Page
				</header>
				<table>
					<tbody>
						<tr><td>Current Navigation State:</td><td>{ navStateText }</td></tr>
						<tr><td>Current Navigation State Bool:</td><td>{ navState.toString()}</td></tr>
						<tr><td>Toggle Navigation MW Clicks:</td><td>{ navigationClicks }</td></tr>
						<tr><td>Navigation Multiplier:</td><td>{ multiplier }</td></tr>
						<tr><td>Middleware Multiplier Clicks:</td><td>{  multipliedCount }</td></tr>
					</tbody>
				</table>

				<div className="button-container">
					<button onClick={ () => toggleNavigation() }>Toggle Navigation</button>
					<button onClick={ () => openNavigation() }>Open Navigation</button>
					<button onClick={ () => closeNavigation() }>Close Navigation</button>
					<button onClick={ () => toggleNavigationWithMiddleWare() }>Toggle Navigation MW</button>
				</div>

			</div>
		);
	}
}

export default connect<
	IStateProps,
	IDispatchProps,
	IOwnProps,
	IMergedProps,
	IRootState>(
		mapStateToProps, mapDispatchToProps, mergeProps
)(Alt);
