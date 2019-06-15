import { handleActions, createAction } from 'redux-actions'
import { pender } from 'redux-pender/lib/utils';
import * as types from './actionTypes';
import { signinAPI, signinWithGoogleAPI, signoutAPI } from '../infra/firebase/api'

export const signinWithGoogle = createAction(types.SIGN_IN_WITH_GOOGLE, signinWithGoogleAPI);

export const signout = createAction(types.SIGN_OUT, signoutAPI);

export const updateUser = createAction(types.UPDATE_USER);

export default handleActions({
    ...pender({
        type: types.SIGN_IN_WITH_GOOGLE,
        onFailure: (state, action) => {
            return Object.assign({}, state, {
                error: action.payload
            });
        }
    }),
    [types.UPDATE_USER]: (state, action) => {
        return Object.assign({}, state, {
            user: action.payload
        });
    }

}, {
        user: null,
        accessToken: null,
        error: null,
    }
)