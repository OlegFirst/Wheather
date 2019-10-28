import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import forecast from './reducer';

// Store creator
// 'applyMiddleware' let use asynchronous actions
export const store = createStore(
	forecast,
	applyMiddleware(
		thunkMiddleware
	)
);