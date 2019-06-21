import { handleActions } from 'redux-actions'
import * as types from '../../actionTypes';

const initialState = false
export default handleActions({
    [types.UPDATE_USER]: (state) => true,
}, initialState)