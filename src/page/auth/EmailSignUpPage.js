import React, { Component, Fragment } from 'react'
import { Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

import EmailSignUp from '../../component/auth/EmailSignUp'
import Navigation from '../../component/navigation/Navigation'

class EmailSignUpPage extends Component {

    goToSignIn = e => {
        this.props.history.push('/sign-in')
    }

    render() {
        const navList = [{ name: '이메일로 회원가입' }]
        return (
            <Fragment>
                <Navigation list={navList} />

                <Grid centered>
                    <Grid.Column computer={6} tablet={8} mobile={15}>
                        <EmailSignUp />
                    </Grid.Column>
                </Grid>
            </Fragment>
        )
    }
}

export default withRouter(EmailSignUpPage);