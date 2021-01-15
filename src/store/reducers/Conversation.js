import Actions from '@actions'
import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
    isAttemptingGet: false,
    list: []
})

const doAttemptGet = state => state.merge({isAttemptingGet: true})
const doDoneAttemptGet = state => state.merge({isAttemptingGet: false})

const doSet = (state, {list}) => state.merge({list})

const HANDLERS = {
    [Actions.Types.ATTEMPT_GET_CONVERSATION]: doAttemptGet,
    [Actions.Types.DONE_ATTEMPT_GET_CONVERSATION]: doDoneAttemptGet,

    [Actions.Types.SET_CONVERSATION]: doSet
}

export default createReducer(INITIAL_STATE, HANDLERS)