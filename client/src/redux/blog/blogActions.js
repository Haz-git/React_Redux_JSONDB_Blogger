//Need action creators for all five different requests.
//Importing constants, history object for programmatic navigation, and blog axios api request:
import blogApi from '../../apis';
//import history from ../../history; *Need to be made*
import {
    CREATE_BLOG,
    FETCH_BLOGS,
    FETCH_BLOG,
    DELETE_BLOG,
    EDIT_BLOG
} from './blogConstants';