import {createActions} from 'reduxsauce'
import auth from './auth'
import user from './user'
import conversation from './conversation'

const {Types, Creators} = createActions({
    ...auth,
    ...user,
    ...conversation
})

export default {
    Types,
    Creators
}