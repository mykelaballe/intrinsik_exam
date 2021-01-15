import instance from './instance'

export const login = payload => instance.post('login', payload)

export const signup = payload => instance.post('signup', payload)