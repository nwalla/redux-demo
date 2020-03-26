import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNavigationOpen } from '../../store/Selectors/navigation';
import { closeNavigation, openNavigation, toggleNavigation, toggleNavigationWithMiddleWare } from '../../store/ActionCreators';
import { getUserNavigationClicks } from '../../store/Selectors/users';

export const Home: FC<{}> = () => {
	const navState = useSelector(getNavigationOpen);
	const navigationClicks = useSelector(getUserNavigationClicks);
	const dispatch = useDispatch();
	return (
		<div>
			<header className="App-header">
				Home
			</header>
			<table>
				<body>
				<tr>
					<td>Current Navigation State:</td>
					<td>{ navState ? 'open' : 'close' }</td>
				</tr>
				<tr>
					<td>Current User Clicks:</td>
					<td>{ navigationClicks }</td>
				</tr>
				</body>
			</table>
			<div className="button-container">
				<button onClick={ () => dispatch(toggleNavigation) }>Toggle Navigation</button>
				<button onClick={ () => dispatch(openNavigation) }>Open Navigation</button>
				<button onClick={ () => dispatch(closeNavigation) }>Close Navigation</button>
				<button onClick={ () => dispatch(toggleNavigationWithMiddleWare) }>Toggle Navigation MW</button>
			
			</div>
		</div>
	);
};
