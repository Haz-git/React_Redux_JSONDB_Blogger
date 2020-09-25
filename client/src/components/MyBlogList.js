import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchBlogs } from '../redux/blog/blogActions';

const MyBlogList = (props) => {

    useEffect(() => {
        props.fetchBlogs();
    },[]);

    const renderMyBlogs = () => {
        if (props.isSignedIn) {
            return props.blogList.map(blog => {
                if (blog.userId === props.userId) {
                    return (
                        <div>
                            <div>
                                {blog.title}
                            </div>
                            <div>
                                {blog.description}
                            </div>
                        </div>
                    )
                }
            });
        }

        return (
            <div>
                Please login to view your own Blog posts!
            </div>
        )
    }


    return (
        <div>{renderMyBlogs()}</div>
    )
}

const mapStateToProps = state => {
    return {
        blogList: Object.values(state.blog),
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, { fetchBlogs })(MyBlogList);