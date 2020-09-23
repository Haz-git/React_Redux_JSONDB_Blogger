//HOC
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

//Reducers
import authReducer from './oAuth/authReducers';

//Access Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(authReducer, composeEnhancers(applyMiddleware(reduxThunk)));
//Solely authReducer for now--this is for testing purposes. 

export default store;