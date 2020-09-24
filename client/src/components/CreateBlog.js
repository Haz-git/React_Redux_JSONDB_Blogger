
//This component should render Form Blog.

import React from 'react';
import { connect } from 'react-redux'
import { createBlog } from '../redux/blog/blogActions';
import FormBlog from './FormBlog';

const CreateBlog = ({ createBlog }) => {

    //Callback function for FormBlog:

    const submitFromContainer = (values) => {
        console.log('Dispatched: ' + JSON.stringify(values))
        createBlog(values);
    }

    return (
        <div>
            This should be the page where formblog is shown.
            <FormBlog onSubmit={values => submitFromContainer(values)}/>
        </div>
    )
}

export default connect(null, { createBlog })(CreateBlog);