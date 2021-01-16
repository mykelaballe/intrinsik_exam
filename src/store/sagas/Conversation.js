import {takeLatest, put, call, select} from 'redux-saga/effects'
import Actions from '@actions'
import database from '@react-native-firebase/database'
import moment from 'moment'

function * get() {
    try {
        /*const dbRef = database().ref('conversation')

        const data = yield call(dbRef.once, 'value')

        console.log(data)*/

        /*.on('value', snapshot => {
            let messages = []

            if(snapshot) {

                const snapShotVal = snapshot.val()

                for(let s in snapShotVal) {
                    messages.push({
                        id: s,
                        message: snapShotVal[s].message,
                        timestamp: snapShotVal[s].timestamp,
                        email: snapShotVal[s].email
                    })
                }
            }

            yield put(Actions.Creators.setConversation(messages))
        })*/
    }
    catch(err) {
        alert(err)
    }

    yield put(Actions.Creators.doneAttemptGetConversation())
}

function * send({payload}) {
    try {
        const state = yield select()

        const newReference = database().ref('conversation').push()

        newReference
        .set({
            name: state.user.data.name,
            email: state.user.data.email,
            timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
            ...payload
        })
    }
    catch(err) {
        alert(err)
    }
}

export default function * () {
    yield takeLatest(Actions.Types.ATTEMPT_GET_CONVERSATION, get)
    yield takeLatest(Actions.Types.ATTEMPT_SEND_MESSAGE, send)
}