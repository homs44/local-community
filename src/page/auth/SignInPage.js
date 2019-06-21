import React, { Component, Fragment } from 'react'
import SignIn from '../../component/auth/SignIn'
import { Grid } from 'semantic-ui-react'

import Navigation from '../../component/navigation/Navigation'

class SignInPage extends Component {
    render() {
        const navList = [{ name: '로그인' }]

        return (
            <Fragment>
                <Navigation list={navList} />
                <Grid centered>
                    <Grid.Column computer={6} tablet={8} mobile={15}>
                        <SignIn />
                    </Grid.Column>
                </Grid>
            </Fragment>
        )
    }
}

export default SignInPage;