import React from 'react';
import AuthContext from './AuthContext';
import PropTypes from 'prop-types';

class AuthProvider extends React.Component {
    state = {
        user: 'mukesh',
        isUserLoggedIn: false,
        loggedInUser: {}
    }
    handleUserChange = (newUser) => {
        this.setState({
            user: newUser
        })
    }
    handleUserLogin = (userName, password) => {
        console.log(userName + password)
        this.setState({
            user: userName
        })
    }
    authorizeUser = (token) => {

    }
    render() {
        return (
            <AuthContext.Provider value={{
                user: this.state.user,
                isUserLoggedIn: this.state.isUserLoggedIn,
                loggedInUser: this.state.loggedInUser,
                handleUserChange: this.handleUserChange,
                handleUserLogin: this.handleUserLogin
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

AuthContext.propTypes = {
    isUserLoggedIn: PropTypes.bool,
    loggedInUser: PropTypes.object
};
export default AuthProvider;