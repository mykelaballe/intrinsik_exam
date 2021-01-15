import AuthSaga from './Auth'
import ConversationSaga from './Conversation'

export default store => {
    store.runSaga(AuthSaga)
    store.runSaga(ConversationSaga)
}