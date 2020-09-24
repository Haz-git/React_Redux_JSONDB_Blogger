import { values } from 'lodash';
//This component should render Form Blog.

import React from 'react';
import { connect } from 'react-redux'
import { createBlog } from '../redux/blog/blogActions';
import FormBlog from './FormBlog';

const CreateBlog = () => {

    //Callback function for FormBlog:

    const submitToContainer = (values) => {
        console.log('Dispatched: ' + values)
        createBlog(values);
    }

    return (
        <div>
            This should be the page where formblog is shown.
            <FormBlog onSubmit={values => submitToContainer(values)}/>
        </div>
    )
}

export default connect(null, { createBlog })(CreateBlog);