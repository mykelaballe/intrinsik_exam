import Actions from '@actions'
import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
    isAttemptingLogn: false,
    isAttemptingSignup: false,
    isLoggedIn: false
})

const doAttemptLogin = state => state.merge({isAttemptingLogin: true})
const doDoneAttemptLogin = state => state.merge({isAttemptingLogin: false})

const doLogin = state => state.merge({isLoggedIn: true})
const doLogout = state => state.merge({isLoggedIn: false})

const doAttemptSignup = state => state.merge({isAttemptingSignup: true})
const doDoneAttemptSignup = state => state.merge({isAttemptingSignup: false})

const HANDLERS = {
    [Actions.Types.ATTEMPT_LOGIN]: doAttemptLogin,
    [Actions.Types.DONE_ATTEMPT_LOGIN]: doDoneAttemptLogin,

    [Actions.Types.LOGIN]: doLogin,
    [Actions.Types.LOGOUT]: doLogout,

    [Actions.Types.ATTEMPT_SIGNUP]: doAttemptSignup,
    [Actions.Types.DONE_ATTEMPT_SIGNUP]: doDoneAttemptSignup
}

export default createReducer(INITIAL_STATE, HANDLERS)