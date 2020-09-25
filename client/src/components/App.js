//Packages:
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

//Components:
import Navbar from './Navbar';
import BlogList from './BlogList';
import CreateBlog from './CreateBlog';
import DeleteBlog from './DeleteBlog';
import EditBlog from './EditBlog';
import ShowBlog from './ShowBlog';
import MyBlogList from './MyBlogList';
import BackDrop from './LandingPage/BackDrop';

//History Object:
import history from '../history';



export const App = () => {
    return (
        <div>
            <Router history={history}>
                <Fade top>
                    <Navbar />
                </Fade>
                <Fade bottom>
                    <BackDrop />
                </Fade>
                <Switch>
                    <Route exact path='/' component={BlogList} />
                    <Route exact path='/blog/create' component={CreateBlog} />
                    <Route exact path='/blog/delete/:id' component={DeleteBlog} />
                    <Route exact path='/blog/edit/:id' component={EditBlog} />
                    <Route exact path='/blog/show/:id' component={ShowBlog} />
                    <Route exact path='/blog/mybloglist' component={MyBlogList} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;
