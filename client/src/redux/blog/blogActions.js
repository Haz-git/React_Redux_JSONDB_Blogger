//Need action creators for all five different requests.
//Importing constants, history object for programmatic navigation, and blog axios api request:
import blogApi from '../../apis';
import history from '../../history';

import {
    CREATE_BLOG,
    FETCH_BLOGS,
    FETCH_BLOG,
    DELETE_BLOG,
    EDIT_BLOG
} from './blogConstants';

//createBlog must make a Post request to axios db.json server.
export const createBlog = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    //grab userId from the state of auth (if user is logged in)
    return {
        type: CREATE_BLOG,
        payload:
    }
}