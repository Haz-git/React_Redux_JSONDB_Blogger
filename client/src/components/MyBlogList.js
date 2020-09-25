import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../redux/blog/blogActions';
import Fade from 'react-reveal/Fade';

//CSS: We will reuse the blogList container CSS from the landing page.
import './LandingPage/css/blogList.css';

const MyBlogList = (props) => {

    useEffect(() => {
        props.fetchBlogs();
    },[]);

    const renderMyBlogs = () => {
        if (props.isSignedIn) {
            return props.blogList.map(blog => {
                if (blog.userId === props.userId) {
                    return (
                        <Fade left>
                            <div className='indiv-blog-container'>
                                <div className='blog-header'>
                                    {blog.title}
                                </div>
                                <div className='blog-desc'>
                                    {blog.description}
                                </div>
                            </div>
                        </Fade>
                    )
                }
            });
        }
    }

    const renderInfoBox = () => {
        if (props.isSignedIn) {
            return (
                <Fade right>
                    <div className='info-box-container'>
                        <div className='info-header'>
                            <h2>Hey There!</h2>
                        </div>
                        <div className='info-desc'>
                            <p>We've grabbed all your notes!</p>
                        </div>
                    </div>
                </Fade>
            )
        }

        return (
            <Fade right>
                <div className='info-box-container'>
                    <div className='info-header'>
                        <h2>Hey There!</h2>
                    </div>
                    <div className='info-desc'>
                        <p>I'm Sorry, we don't know who you are! Please login!</p>
                    </div>
                </div>
            </Fade>
        )
    }



    return (
        <div>
            {renderMyBlogs()}
            {renderInfoBox()}
        </div>
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