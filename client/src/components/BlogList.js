//This component should show up on the HomePage.
import React from 'react';
import { connect } from 'react-redux';

const BlogList = () => {
    return (
        <div>This should show a list of blogs</div>
    )
}

// const mapStateToProps = state => {
//     isSignedIn: state.isSignedIn
// }

// export default connect(mapStateToProps)(BlogList);

export default BlogList;