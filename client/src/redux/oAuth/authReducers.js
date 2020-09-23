import SIGN_OUT from './authConstants';
import SIGN_IN from './authConstants';

//Reducers for user login:

const initialState = {
    isSignedIn: null,
    userId: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload};
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null};
        default:
            return state;
    }
}

//... state = returns a new object with changed values for the isSignedIn and userId keys.