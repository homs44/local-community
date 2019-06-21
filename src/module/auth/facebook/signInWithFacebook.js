import { handleActions } from 'redux-actions'
import * as types from '../../actionTypes';


const initialState = {
    loading: false,
    error:null,
}
export default handleActions({
    [types.SIGN_IN_WITH_FACEBOOK_REQUEST]: (state) => Object.assign({}, state, { loading: true }),
    [types.SIGN_IN_WITH_FACEBOOK_SUCCESS]: (state) => Object.assign({}, state, { loading: false }),
    [types.SIGN_IN_WITH_FACEBOOK_FAILED]: (state, action) => Object.assign({}, state, { loading: false, error: action.payload }),
}, initialState)