//This page should just render a modal or an alert prompting a user if he/she is sure about blog post deletion.

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlog, deleteBlog } from '../redux/blog/blogActions';
import history from '../history';

const DeleteBlog = (props) => {

    useEffect(() => {
        props.fetchBlog(props.match.params.id);
    },[])

    const handleDelete = () => {
        props.deleteBlog(props.match.params.id);
    }

    const handleCancel = () => {
        history.push('/');
    }

    return (
        <div>
            <h1>Are you sure you want to delete:</h1>
            <div>
                <h2>{props.blog.title}</h2>
                <p>{props.blog.description}</p>
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleCancel}>Go Back</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        blog: state.blog[ownProps.match.params.id],
    }
}

export default connect(mapStateToProps, { fetchBlog, deleteBlog})(DeleteBlog);