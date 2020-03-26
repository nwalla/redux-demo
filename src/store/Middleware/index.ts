import { applyMiddleware, createStore, compose, StoreEnhancer } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { rootReducer } from '../index';
import { IRootState } from '../Reducers/types';
import { navigationMiddleWare } from './navigationMiddleWare';

/* eslint-disable no-underscore-dangle */
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__: Function;
	}
}

export const configureStore = ( preloadedState?: IRootState ) => {
	const middleware: ThunkMiddleware<IRootState>[] = [
		thunk,
		navigationMiddleWare
	];
	const appliedMiddlewares: StoreEnhancer = applyMiddleware(...middleware);
	
	const composeableEnhancers: StoreEnhancer[] = [
		appliedMiddlewares
	];
	if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
		composeableEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
	}
	const enhancers: StoreEnhancer = compose(...composeableEnhancers);
	/* eslint-enable */
	const store = createStore(rootReducer, preloadedState, enhancers);
	
	if (process.env.NODE_ENV !== 'production' && module.hot) {
		module.hot.accept('../index', () => store.replaceReducer(rootReducer));
	}
	return store;
};
