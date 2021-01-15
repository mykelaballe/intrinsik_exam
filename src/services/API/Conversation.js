import instance from './instance'

export const getConversation = () => instance.get('conversation')

export const sendMessage = payload => instance.post('sendMessage', payload)