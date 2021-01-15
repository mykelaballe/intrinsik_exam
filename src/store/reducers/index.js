import {combineReducers} from 'redux'
import AuthReducer from './Auth'
import UserReducer from './User'
import ConversationReducer from './Conversation'

export default combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    conversation: ConversationReducer
})