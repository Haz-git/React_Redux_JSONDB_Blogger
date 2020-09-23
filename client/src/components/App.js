//Packages:
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';

//Components:
import Navbar from './Navbar';
import BlogList from './BlogList';
import CreateBlog from './CreateBlog';
import DeleteBlog from './DeleteBlog';
import EditBlog from './EditBlog';
import ShowBlog from './ShowBlog';
import MyBlogList from './MyBlogList';

//History Object:
import history from '../history';



export const App = () => {
    return (
        <div>
            <Router history={history}>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={BlogList} />
                    <Route exact path='/blog/create' component={CreateBlog} />
                    <Route exact path='/blog/delete' component={DeleteBlog} />
                    <Route exact path='/blog/edit' component={EditBlog} />
                    <Route exact path='/blog/show' component={ShowBlog} />
                    <Route exact path='/blog/bloglist' component={MyBlogList} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;
