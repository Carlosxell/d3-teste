import { createStore, applyMiddleware } from 'redux';
import { createLogger  } from 'redux-logger';
import thunk from 'redux-thunk';
import { Reducers } from '../reducers';

const applyMiddlewares = applyMiddleware(thunk, createLogger());
export const Store = createStore(Reducers, applyMiddlewares);
