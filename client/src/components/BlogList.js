//This component should show up on the HomePage.
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../redux/blog/blogActions';
import { Link } from 'react-router-dom';

const BlogList = ({fetchBlogs, blogList, currentUserId, isSignedIn}) => {
    //Call our action creator on component render:
    useEffect(() => {
        fetchBlogs();
    },[])


    const renderCreateButton = () => {
        //Identifies if User has signed in, if yes, enabled ability to create a new Blog Post:
        if (isSignedIn) {
            return (
                <Link to='/blog/create'><button>Create</button></Link>
            )
        } else {
            return null;
        }
    }

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
            <div>
                {renderCreateButton()}
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