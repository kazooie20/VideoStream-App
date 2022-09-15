import React from 'react';
import {connect} from 'react-redux';
import {SignIn, SignOut} from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId : "876993109065-8ppqil9p3ij2cqalsaqdnsfp2bg8rek5.apps.googleusercontent.com",
                scope : 'email',
                plugin_name : 'Stream'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
        
    }

    //Callback Function so that the context is bound | Change the state with redux
    onAuthChange = (isSignedIn) =>{
        if (isSignedIn) {
            this.props.SignIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.SignOut();
        }
       
    }

    //Sign In / Sign Out funcs using Google API 
    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    checkSignedIn(){
        if (this.props.isSignedIn === null) {
            return <button className='ui primary button'>Google OAuth</button>
        }

        else if (this.props.isSignedIn) {
            return <button className='ui red button' onClick={this.onSignOutClick}>Logout</button>
        }

        else {
            return <button className='ui primary button' onClick={this.onSignInClick}>Login</button>

        }
    }

    render() {
        return (
            this.checkSignedIn()
        )
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn : state.auth.isSignedIn}
}
export default connect(mapStateToProps, {SignIn, SignOut})(GoogleAuth);