import React, { Component, Fragment } from 'react'
import { Grid, Container } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

import EmailSignIn from '../../component/auth/EmailSignIn'
import Navigation from '../../component/navigation/Navigation'


class EmailSignInPage extends Component {

    goToSignIn = e => {
        this.props.history.push('/sign-in')
    }

    render() {
        const navList = [{ name: '로그인', onClick: this.goToSignIn }, { name: '이메일로 시작하기', onClick: null }]

        return (
            <Fragment>
                <Navigation list={navList} />
                <Container>
                    <Grid centered>
                        <Grid.Column computer={6} tablet={8} mobile={15}>
                            <EmailSignIn />
                        </Grid.Column>
                    </Grid>
                </Container>
            </Fragment>
        )
    }
}

export default withRouter(EmailSignInPage);