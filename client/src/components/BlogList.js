//This component should show up on the HomePage.
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../redux/blog/blogActions';
import { Link } from 'react-router-dom';

const BlogList = ({fetchBlogs, blogList, currentUserId }) => {
    //Call our action creator on component render:
    useEffect(() => {
        fetchBlogs();
    },[])

    //helper function that determines whether a blog post is the user's. If the blog post is the user's--render an edit or delete button. 

    const renderButtons = (blog) => {
        if (blog.userId === currentUserId) {
            return (
                <div>
                    <Link to={`/blog/edit/${blog.id}`}><button>Edit</button></Link>
                    <Link to={`/blog/delete/${blog.id}`}><button>Delete</button></Link>
                </div>
            )
        }
    }


    //helper function used to render out each object in the array:
    const renderList = () => {
        return blogList.map(blog => {
            return (
                <div>
                    <div>
                        <Link to={`/blog/show/${blog.id}`} >{blog.title}</Link>
                    </div>
                    <div>
                        {blog.description}
                    </div>
                    {renderButtons(blog)}
                </div>
            )
        });

    }

    return (
        <div>
            <h1>Welcome, Here are the top trending blogs!</h1>
            <div>
                {renderList()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn,
        blogList: Object.values(state.blog),
        currentUserId: state.auth.userId
    }
}

export default connect(mapStateToProps, { fetchBlogs })(BlogList);