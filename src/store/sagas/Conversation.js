import {takeLatest, put, call, select} from 'redux-saga/effects'
import Actions from '@actions'
import * as API from '@api'

function * get() {
    try {
        //const res = yield call(API.getConversation)

        if(true || res.status == 200) {
            yield put(Actions.Creators.setConversation([
                {
                    email: 'anotheruser@example.com',
                    message: 'Hi, Good Morning!',
                    timestamp: '2021-01-15 10:30:00'
                }
            ]))
        }
    }
    catch(err) {
        alert(err)
    }

    yield put(Actions.Creators.doneAttemptGetConversation())
}

function * send({payload}) {
    try {
        const state = yield select()

        //const res = yield call(API.getConversation)

        if(true || res.status == 200) {
            let conversation = [...state.conversation.list]

            conversation.push({
                ...payload,
                email: state.user.data.email
            })

            yield put(Actions.Creators.setConversation(conversation))
        }
    }
    catch(err) {
        alert(err)
    }
}

export default function * () {
    yield takeLatest(Actions.Types.ATTEMPT_GET_CONVERSATION, get)
    yield takeLatest(Actions.Types.ATTEMPT_SEND_MESSAGE, send)
}