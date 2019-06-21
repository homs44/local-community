import { createAction } from 'redux-actions'
import {
    signOutAPI,
    signInWithEmailAPI,
    signUpWithEmailAPI,
    signInWithFacebookAPI,
    signInWithGoogleAPI
} from '../../infra/firebase/api'
import * as types from '../actionTypes';

/**
 * 로그아웃
 */
const signOutRequest = createAction(types.SIGN_OUT_REQUEST);
const signOutSuccess = createAction(types.SIGN_OUT_SUCCESS);
export const signOutFailed = createAction(types.SIGN_OUT_FAILED);

export const signOut = () => {
    return (dispatch) => {
        dispatch(signOutRequest());
        signOutAPI()
            .then(() => {
                dispatch(signOutSuccess());
            })
            .catch((error) => {
                dispatch(signOutFailed(error));
            })
    }
}

/**
 * 유저 로그인 상태 갱신
 */
export const updateUser = createAction(types.UPDATE_USER);

/**
 * 이메일 로그인
 */
const signInWithEmailRequest = createAction(types.SIGN_IN_WITH_EMAIL_REQUEST);
const signInWithEmailSuccess = createAction(types.SIGN_IN_WITH_EMAIL_SUCCESS);
export const signInWithEmailFailed = createAction(types.SIGN_IN_WITH_EMAIL_FAILED);

export const signInWithEmail = (email, password) => {
    return (dispatch) => {
        dispatch(signInWithEmailRequest());
        signInWithEmailAPI(email, password)
            .then(() => {
                dispatch(signInWithEmailSuccess());
            })
            .catch((error) => {
                dispatch(signInWithEmailFailed(error));
            })
    }
}

/**
 * 이메일 회원가입
 */
const signUpWithEmailRequest = createAction(types.SIGN_UP_WITH_EMAIL_REQUEST);
const signUpWithEmailSuccess = createAction(types.SIGN_UP_WITH_EMAIL_SUCCESS);
export const signUpWithEmailFailed = createAction(types.SIGN_UP_WITH_EMAIL_FAILED);

export const signUpWithEmail = (email, password) => {
    return (dispatch) => {
        dispatch(signUpWithEmailRequest());
        signUpWithEmailAPI(email, password)
            .then(() => {
                dispatch(signUpWithEmailSuccess());
            })
            .catch((error) => {
                dispatch(signUpWithEmailFailed(error));
            })
    }
}

/**
 * 페이스북 로그인
 */
const signInWithFacebookRequest = createAction(types.SIGN_IN_WITH_FACEBOOK_REQUEST);
const signInWithFacebookSuccess = createAction(types.SIGN_IN_WITH_FACEBOOK_SUCCESS);
export const signInWithFacebookFailed = createAction(types.SIGN_IN_WITH_FACEBOOK_FAILED);

export const signInWithFacebook = () => {
    return (dispatch) => {
        dispatch(signInWithFacebookRequest());
        signInWithFacebookAPI()
            .then(() => {
                dispatch(signInWithFacebookSuccess());
            })
            .catch((error) => {
                dispatch(signInWithFacebookFailed(error));
            })
    }
}

/**
 * 구글 로그인
 */
const signInWithGoogleRequest = createAction(types.SIGN_IN_WITH_GOOGLE_REQUEST);
const signInWithGoogleSuccess = createAction(types.SIGN_IN_WITH_GOOGLE_SUCCESS);
export const signInWithGoogleFailed = createAction(types.SIGN_IN_WITH_GOOGLE_FAILED);

export const signInWithGoogle = () => {
    return (dispatch) => {
        dispatch(signInWithGoogleRequest());
        signInWithGoogleAPI()
            .then(() => {
                dispatch(signInWithGoogleSuccess());
            })
            .catch((error) => {
                dispatch(signInWithGoogleFailed(error));
            })
    }
}