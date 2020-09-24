import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchBlog } from '../redux/blog/blogActions';

const ShowBlog = (props) => {

    useEffect(() => {
        props.fetchBlog(props.match.params.id); //Passed in via react-router-dom.
    },[])

    const renderBlog = () => {

        console.log(props.blog);

        if (!props.blog) {
            return (
                <div>Sorry! We couldn't find that Blog Post.</div>
            )
        } 

        const { title, description } = props.blog;

        return (
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        )
    }

    return (
        <div>
            {renderBlog()}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        blog: state.blog[ownProps.match.params.id]
    }
}
//This ownProps refers to the Props passed to this component by the parent component. In this case, 'ownProps.match.params.id' is a property of the props object passed by react-router-dom!

export default connect(mapStateToProps, { fetchBlog })(ShowBlog);