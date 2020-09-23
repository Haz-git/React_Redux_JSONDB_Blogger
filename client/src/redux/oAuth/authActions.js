import { SIGN_IN } from './authConstants';
import { SIGN_OUT } from './authConstants';

//Action creators for User Authentication:

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}