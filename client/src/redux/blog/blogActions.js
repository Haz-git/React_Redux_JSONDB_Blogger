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
    const response = await blogApi.post('/blogposts', {...formValues, userId});
    //post a new object into the JSON DB under the array 'blogposts', this object will include all the old objects, with a new object containing the newly submitted formvalues with the userId.

    //We dispatch the response to update our state.
    dispatch({
        type: CREATE_BLOG,
        payload: response.data
    })

    history.push('/');
}

//fetchBlogs must make a GET request to JSON server, retrieve the array of blog posts:

export const fetchBlogs = () => async dispatch => {
    const response = await blogApi.get('/blogposts');
    //We are just 'getting' the entire array list here.

    //When we get this data back we'll dispatch it to our state.
    dispatch({
        type: FETCH_BLOGS,
        payload: response.data
    })
}

//fetchBlog retrieves an individual Blog according to the Id.

export const fetchBlog = id => async dispatch => {
    const response = await blogApi.get(`/blogposts/${id}`);

    dispatch({
        type: FETCH_BLOG,
        payload: response.data
    });
}