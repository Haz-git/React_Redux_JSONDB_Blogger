//This component should render something like FormBlog--> Allowing the edit to only edit his/her blog posts. 
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlog, editBlog } from '../redux/blog/blogActions';

import FormBlog from './FormBlog';

const EditBlog = (props) => {

    useEffect(() => {
        fetchBlog(props.match.params.id);
    },[])

    const handleOnSubmit = values => {
        console.log(JSON.stringify(values));
        props.editBlog(props.match.params.id, values);
    }

    if (!props.blog) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <FormBlog 
                initialValues={{
                    title: props.blog.title,
                    description: props.blog.description
                }}
                onSubmit={value => handleOnSubmit(value)}
            />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        blog: state.blog[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchBlog, editBlog })(EditBlog);