import {takeLatest, put, call} from 'redux-saga/effects'
import Actions from '@actions'
import * as API from '@api'
import {goBack} from '@services'
import {USER_DB} from '@config'
import AsyncStorage from '@react-native-async-storage/async-storage'

function * login({payload: {email, password}}) {
    try {
        if(!email || !password) alert('Please enter your credentials')
        else {
            const res = yield call(API.login, {email, password})

            if(res.status == 200) {
                const userData = {
                    name: 'Mykel Aballe',
                    email,
                    token: res.data.token
                }

                const userDB = yield call(AsyncStorage.getItem, USER_DB)
                let users = JSON.parse(userDB)

                let accountExists = false

                if(users) {
                    users.map(u => {
                        if(u.email == email) accountExists = true
                    })
                }
                
                if(accountExists) {
                    const userDataJSON = JSON.stringify(userData)

                    yield call(AsyncStorage.setItem, '@users', userDataJSON)

                    yield put(Actions.Creators.setUserData(userData))

                    yield put(Actions.Creators.login())
                }
                else {
                    alert('Account does not exist')
                }
            }
        }
    }
    catch(err) {
        alert(err)
    }

    yield put(Actions.Creators.doneAttemptLogin())
}

function * signup({payload: {name, email, password}}) {
    try {
        if(!name || !email || !password) alert('Please complete all information')
        else {
            const res = yield call(API.signup, {
                name,
                email,
                password
            })
    
            if(res.status == 200) {
                let userDB = yield call(AsyncStorage.getItem, USER_DB)
                let users = JSON.parse(userDB)

                let emailExists = false

                if(users) {
                    users.map(u => {
                        if(u.email == email) emailExists = true
                    })
                }
                else {
                    users = []
                }

                if(emailExists) alert('Email already exists')
                else {
                    users.push({
                        name,
                        email,
                        password
                    })

                    yield call(AsyncStorage.setItem, USER_DB, JSON.stringify(users))

                    alert('Signup successful')
                    goBack()
                }
            }
        }
    }
    catch(err) {
        alert(err)
    }

    yield put(Actions.Creators.doneAttemptSignup())
}

export default function * () {
    yield takeLatest(Actions.Types.ATTEMPT_LOGIN, login)
    yield takeLatest(Actions.Types.ATTEMPT_SIGNUP, signup)
}