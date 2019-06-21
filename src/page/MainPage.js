import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class MainPage extends Component {
    render() {
        return (<Grid centered>
            <Grid.Column computer={6} tablet={8} mobile={15}>
                MainPage
            </Grid.Column>
        </Grid>)
    }
}
export default MainPage;