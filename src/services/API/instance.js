import axios from 'axios'
import {API_BASEURL} from '@config'

export default axios.create({
    baseURL: `${API_BASEURL}`,
    //timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})