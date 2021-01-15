import Actions from '@actions'
import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
    data: {}
})

const doSetUserData = (state, {data}) => state.merge({data})
const doClearUserData = state => state.merge({data: null})

const HANDLERS = {
    [Actions.Types.SET_USER_DATA]: doSetUserData,
    [Actions.Types.CLEAR_USER_DATA]: doClearUserData
}

export default createReducer(INITIAL_STATE, HANDLERS)