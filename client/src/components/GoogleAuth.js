import React from 'react';
import { signIn, signOut } from '../redux/oAuth/authActions';
import { connect } from 'react-redux';
import '../css/googleAuth.css';


class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: '682108209344-d6p8nl0gh3q3sddtbdnuu72h9oil6aeo.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.userProfile = this.auth.currentUser.get().getBasicProfile();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} type="button" className="btn btn-danger">
                    <img src={this.userProfile.getImageUrl()} className='rounded-circle'></img>
                    Welcome, {this.userProfile.getName()}! Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} type='button' className="btn btn-primary">
                    Sign In With Google!
                </button>
            )
        }
    }


    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.isSignedIn
    }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);