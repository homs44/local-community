import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Button, Menu } from 'semantic-ui-react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../module/auth/actions';

const StyledMenu = styled(Menu)`
    &&&{
        margin:0
    }
`

class Header extends Component {

    onClickMenu = e => {
        this.props.history.push(e.target.name)
    }

    onSignOut = e => {
        this.props.authActions.signOut();
    }

    render() {
        const { user } = this.props;

        if (user) {
            return (
                <StyledMenu>
                    <Menu.Item header>
                        Seven Valley
                </Menu.Item>
                    <Menu.Item name='/' onClick={this.onClickMenu} >
                        Home
                </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button onClick={this.onSignOut} >로그아웃</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </StyledMenu>
            )
        } else {
            return (
                <StyledMenu>
                    <Menu.Item header>
                        Seven Valley
                    </Menu.Item>
                    <Menu.Item name='/' onClick={this.onClickMenu} >
                        Home
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button name='/sign-in' onClick={this.onClickMenu} >로그인</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </StyledMenu>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));