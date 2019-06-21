import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Button, Icon } from 'semantic-ui-react'
import * as authActions from '../../module/auth/actions';

const style = {
    button: {
        margin: '8px 0',
    }
}

class SignIn extends Component {

    onGoogleLogin = e => {
        this.props.authActions.signInWithGoogle();
    }

    onFacebookLogin = e => {
        this.props.authActions.signInWithFacebook();
    }

    goToEmailLogin = e => {
        this.props.history.push('/sign-in/email')
    }

    render() {
        const { facebookLoading, googleLoading } = this.props;
        return (

            <Fragment>
                <Button color='blue'
                    fluid
                    style={style.button}
                    onClick={this.goToEmailLogin}>
                    <Icon name='mail' /> 이메일로 시작하기
                </Button>
                <Button color='facebook'
                    fluid
                    style={style.button}
                    loading={facebookLoading}
                    onClick={this.onFacebookLogin}>
                    <Icon name='facebook' /> 페이스북으로 시작하기
                </Button>
                <Button
                    color='google plus'
                    fluid
                    style={style.button}
                    loading={googleLoading}
                    onClick={this.onGoogleLogin}>
                    <Icon name='google plus' /> 구글로 시작하기
                </Button>
            </Fragment>)
    }
}

const mapStateToProps = (state) => {
    return {
        facebookLoading: state.auth.signInWithFacebook.loading,
        googleLoading: state.auth.signInWithGoogle.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));