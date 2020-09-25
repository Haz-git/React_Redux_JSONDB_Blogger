//Pkgs
import React from 'react';
import { Link } from 'react-router-dom';

//Components
import GoogleAuth from './GoogleAuth';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand">Notely</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-link active" to='/'>Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-link" to='/blog/mybloglist'>My Blog Posts</Link>
                        <GoogleAuth />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;