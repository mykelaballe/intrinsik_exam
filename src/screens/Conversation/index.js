import React, {useState, useEffect} from 'react'
import {FlatList} from 'react-native'
import {Row, TextInput, ActivityIndicator} from '@components'
import {Colors} from '@themes'
import MessageLeft from './MessageLeft'
import MessageRight from './MessageRight'
import {IconButton} from 'react-native-paper'
import moment from 'moment'
import {useSelector, useDispatch} from 'react-redux'
import Actions from '@actions'

export default () => {

    const {data} = useSelector(({user}) => user)
    const {isAttemptingGet, list} = useSelector(({conversation}) => conversation)

    const dispatch = useDispatch()

    const [message, setMessage] = useState('')

    useEffect(() => {
        dispatch({type: Actions.Types.ATTEMPT_GET_CONVERSATION})
    },[])

    const handleChangeMessage = text => setMessage(text)

    const handleSend = () => {
        if(message) {
            setMessage('')

            dispatch({
                type: Actions.Types.ATTEMPT_SEND_MESSAGE,
                payload: {
                    message,
                    timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
                }
            })
        }
    }

    const renderItem = ({item}) => item.email == data.email ? <MessageRight data={item} /> : <MessageLeft data={item} />

    const keyExtractor = (item, index) => index.toString()

    return (
        <>
            {isAttemptingGet ? <ActivityIndicator /> :
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
            />
            }

            <Row style={{backgroundColor: Colors.light}}>
                <TextInput
                    style={{flex: 1, backgroundColor: 'transparent'}}
                    value={message}
                    placeholder='Type here...'
                    onChangeText={handleChangeMessage}
                />

                <IconButton color={Colors.primary} icon='send' onPress={handleSend} />
            </Row>
        </>
    )
}