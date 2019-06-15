import React, { Component } from 'react'
import * as authActions from '../../module/authReducer';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Signin extends Component {

    onGoogleLogin = e => {
        console.log('googe login')
        this.props.authActions.signinWithGoogle();
    }

    onSignout = e =>{
        this.props.authActions.signout();
    }

    onLogout

    render() {
        const { user } = this.props;
        return (<div>
            <button onClick={this.onGoogleLogin}>google login</button>
            <button onClick={this.onSignout}>sign out</button>
            <p>
                {
                    JSON.stringify(user)
                }
            </p>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);