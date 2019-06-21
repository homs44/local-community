import { combineReducers } from 'redux'
import signInWithEmail from './email/signInWithEmail'
import signUpWithEmail from './email/signUpWithEmail'
import user from './common/user'
import initialized from './common/initialized'
import signOut from './common/signOut'
import signInWithFacebook from './facebook/signInWithFacebook'
import signInWithGoogle from './google/signInWithGoogle'

export default combineReducers({
    signInWithEmail,
    signUpWithEmail,
    initialized,
    user,
    signOut,
    signInWithFacebook,
    signInWithGoogle
})