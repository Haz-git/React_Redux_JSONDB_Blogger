import {
    CREATE_BLOG,
    FETCH_BLOG,
    FETCH_BLOGS,
    EDIT_BLOG,
    DELETE_BLOG
} from './blogConstants';
import _ from 'lodash';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BLOGS:
            return {...state, ..._.mapKeys(action.payload, 'id')}
            //Returns A new object of whatever that is in the original object, and utilizes lodash's mapKeys--> serves to create another new object with the key of 'Id' and the action payload.
        case FETCH_BLOG:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_BLOG:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_BLOG:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_BLOG:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}

//FETCH_BLOG, CREATE_BLOG, EDIT_BLOG all has the same return state-- They are all returning the original state => then adding the action's Id as the key, with the value as the payload.

//For DELETE_BLOG, since the Id is the payload itself, we will omit the targeted blog id.