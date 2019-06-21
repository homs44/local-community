import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, List, Message } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../constant/palette';
import * as authActions from '../../module/auth/actions';

const StyledListItem = styled(List.Item)`
    &&{
        &:hover{
            cursor:pointer;
            color:${palette.primary}
        }
    }
`;

class EmailSignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    onHandleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onFindPassword = e => {
        this.props.authActions.signInWithEmailFailed(new Error('아직 구현하지 않았습니다'));
    }

    onEmailSignIn = e => {
        const { email, password } = this.state;

        if (!email) {
            this.props.authActions.signInWithEmailFailed(new Error('이메일을 입력하세요'));
            return;
        }

        if (!password) {
            this.props.authActions.signInWithEmailFailed(new Error('비밀번호를 입력하세요'));
            return;
        }

        this.props.authActions.signInWithEmail(email, password);
    }

    goToSignUp = e => {
        this.props.history.push('/sign-up/email')
    }

    render() {
        const { email, password } = this.state;
        const { loading, error } = this.props;

        return (
            <Form>
                <Form.Field>
                    <label>이메일</label>
                    <input name='email' placeholder='이메일' value={email} onChange={this.onHandleChange} />
                </Form.Field>
                <Form.Field>
                    <label>비밀번호</label>
                    <input type='password' name='password' placeholder='비밀번호' value={password} onChange={this.onHandleChange} />
                </Form.Field>
                <Form.Button fluid type='submit' loading={loading} onClick={this.onEmailSignIn}>로그인</Form.Button>
                <List>
                    <StyledListItem onClick={this.onFindPassword}>비밀번호를 잊으셨습니까? 비밀번호 찾기</StyledListItem>
                    <StyledListItem onClick={this.goToSignUp}>회원이 아니십니까? 회원가입</StyledListItem>
                </List>
                {
                    error && error.message ?
                        <Message>{error.message}</Message> :
                        null
                }
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.signInWithEmail.loading,
        error: state.auth.signInWithEmail.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmailSignIn));