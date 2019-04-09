import { createStore,  compose } from 'redux';

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const reducer = (state) => (state);
const store = createStore(reducer,initialState,componseEnhancers);

export default store;