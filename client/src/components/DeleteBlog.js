//This page should just render a modal or an alert prompting a user if he/she is sure about blog post deletion.

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlog, deleteBlog } from '../redux/blog/blogActions';
import history from '../history';
import '../css/deleteBlog.css';

const DeleteBlog = (props) => {

    useEffect(() => {
        props.fetchBlog(props.match.params.id);
    },[])

    const handleDelete = () => {
        props.deleteBlog(props.match.params.id);
        history.push('/');
    }

    const handleCancel = () => {
        history.push('/');
    }

    return (
        <div className='delete-main-container'>
            <h1>Are You Sure? You Are Deleting:</h1>
            <div className='delete-details-container'>
                <h2>{props.blog.title}</h2>
                <p>{props.blog.description}</p>
            </div>
            <div className='delete-buttons-container'>
                <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
                <button className='btn btn-success' onClick={handleCancel}>Go Back</button>
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