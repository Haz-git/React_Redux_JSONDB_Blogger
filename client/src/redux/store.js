//HOC
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

//Reducers
import authReducer from './oAuth/authReducers';
import { reducer as formReducer } from 'redux-form';
import blogReducer from './blog/blogReducers';

//Access Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//RootReducer
const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    blog: blogReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));
//Solely authReducer for now--this is for testing purposes. 

export default store;