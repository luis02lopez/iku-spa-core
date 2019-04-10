import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import login from '../reducers/loginReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const store = createStore(login,initialState,composeEnhancers(applyMiddleware(thunk)));

export default store;