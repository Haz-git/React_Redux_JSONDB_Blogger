//This component should show up on the HomePage.
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../redux/blog/blogActions';

const BlogList = ({fetchBlogs, blogList }) => {

    useEffect(() => {
        fetchBlogs();
    },[])

    const renderList = () => {
        return blogList.map(blog => {
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
        });

    }

    return (
        <div>
            <h1>Welcome, Here is the top trending blogs!</h1>
            <div>
                {renderList()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn,
        blogList: Object.values(state.blog)
    }
}

export default connect(mapStateToProps, { fetchBlogs })(BlogList);