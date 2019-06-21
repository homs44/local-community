import React, { Component, Fragment } from 'react'
import * as authActions from '../../module/auth/reducer';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

class Main extends Component {

    componentDidMount() {
    }


    render() {

        const { user, success } = this.props;

        if (!user && success) {
            return <Redirect to="/sign-in" />
        }

        return (

            <Fragment>

            </Fragment>)
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        isAuthInitialized: state.auth.isAuthInitialized,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));