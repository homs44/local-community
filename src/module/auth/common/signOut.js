import { handleActions } from 'redux-actions'
import * as types from '../../actionTypes';

const initialState = {
    loading: false,
    error: null,
}
export default handleActions({
    [types.SIGN_OUT_REQUEST]: (state) => Object.assign({}, state, { loading: true }),
    [types.SIGN_OUT_SUCCESS]: (state) => Object.assign({}, state, { loading: false }),
    [types.SIGN_OUT_FAILED]: (state, action) => Object.assign({}, state, { loading: false, error: action.payload }),
}, initialState)