import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import logo from './logo.svg';
import { configureStore } from './store/Middleware';
import { IRootState } from './store/Reducers/types';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import { Home } from './Views/Home';
import { Alt } from './Views/Alt';

export const store = configureStore({} as IRootState);

function App() {
	return (
		<ReduxProvider store={ store }>
			<Router>
				<div className="App">
					
					<header className="App-header">
						<NavLink to="/home" className="Nav-link" activeClassName="Nav-link-active" >Home</NavLink>
						<NavLink to="/alt" className="Nav-link" activeClassName="Nav-link-active">Alt</NavLink>
						<img src={ logo } className="App-logo" alt="logo" />
						<Switch>
							<Route path="/home" component={Home}/>
							<Route path="/alt" render={(props)=><Alt {...props} multiplier={3}/>}/>
							<Redirect to="/home" />
						</Switch>
					</header>
				</div>
			</Router>
		</ReduxProvider>
	);
}

export default App;
