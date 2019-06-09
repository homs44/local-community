import { handleActions, createAction } from 'redux-actions'
import { pender } from 'redux-pender/lib/utils';
import * as types from './actionTypes';
import { signinAPI } from '../infra/firebase/api'

export const signin = createAction(types.SIGN_IN, signinAPI);


export default handleActions({
    ...pender({
        type: types.SIGN_IN,
        onSuccess: (state, action) => {
            return Object.assign({}, state, {
                // 변경 된 데이터 내용
            });
        },
        onFailure: (state, action) => {
            return Object.assign({}, state, {
                // 변경 된 데이터 내용
            });
        }
    }),
    [types.DEFAULT_ACTION]: (state, action) => {
        return Object.assign({}, state, {
            // 변경 된 데이터 내용
        });
    }

}, {
        user: null,
    }
)