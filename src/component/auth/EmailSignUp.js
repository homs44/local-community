import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Message } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import * as authActions from '../../module/auth/actions';

class EmailSignUp extends Component {

    state = {
        email: '',
        password: '',
        passwordCheck: '',
    }

    onSignUp = e => {
        const { email, password, passwordCheck } = this.state;

        if (!email) {
            this.props.authActions.signUpWithEmailFailed(new Error('이메일을 입력하세요'));
            return;
        }

        if (!password) {
            this.props.authActions.signUpWithEmailFailed(new Error('비밀번호를 입력하세요'));
            return;
        }

        if (password !== passwordCheck) {
            this.props.authActions.signUpWithEmailFailed(new Error('비밀번호가 다릅니다.'));
            return;
        }

        this.props.authActions.signUpWithEmail(email, password);
    }

    onHandleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { email, password, passwordCheck } = this.state;
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
                <Form.Field>
                    <label>비밀번호 확인</label>
                    <input type='password' name='passwordCheck' placeholder='비밀번호 확인' value={passwordCheck} onChange={this.onHandleChange} />
                </Form.Field>
                <Form.Button fluid type='submit' loading={loading} onClick={this.onSignUp} >회원가입</Form.Button>
                {
                    error && error.message ?
                        <Message >{error.message}</Message> :
                        null
                }
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.auth.signUpWithEmail.error,
        loading: state.auth.signUpWithEmail.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EmailSignUp));