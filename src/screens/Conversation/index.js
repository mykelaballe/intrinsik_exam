import React, {useState, useEffect} from 'react'
import {FlatList, View} from 'react-native'
import {Row, TextInput, ActivityIndicator, Text, HR} from '@components'
import {Colors, Metrics} from '@themes'
import {isImage} from '@utils'
import MessageLeft from './MessageLeft'
import MessageRight from './MessageRight'
import {IconButton} from 'react-native-paper'
import moment from 'moment'
import {useSelector, useDispatch} from 'react-redux'
import Actions from '@actions'
import DocumentPicker from 'react-native-document-picker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import database from '@react-native-firebase/database'

export default () => {

    const {data} = useSelector(({user}) => user)
    const {isAttemptingGet, list} = useSelector(({conversation}) => conversation)

    const dispatch = useDispatch()

    const [message, setMessage] = useState('')
    const [file, setFile] = useState(null)

    useEffect(() => {
        dispatch({type: Actions.Types.ATTEMPT_GET_CONVERSATION})
    },[])

    useEffect(() => {
        database()
        .ref('conversation')
        .on('value', snapshot => {

            const snapShotVal = snapshot.val()

            console.log('ONE!!!\n\n', snapShotVal)

            let snapShotMessages = []

            for(let s in snapShotVal) {
                snapShotMessages.unshift({
                    id: s,
                    ...snapShotVal[s]
                })
            }

            snapShotMessages.sort(function(a, b) {
                return moment(a.timestamp).isAfter(moment(b.timestamp))
            })

            console.log('TWO!!!\n\n', snapShotMessages)

            dispatch({
                type: Actions.Types.SET_CONVERSATION,
                list: snapShotMessages
            })

            /*dispatch({
                type: Actions.Types.ADD_TO_CONVERSATION,
                message: {
                    email: 'mykel',
                    message: '123',
                    timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
                }
            })*/
        })
    },[])

    const handleChangeMessage = text => setMessage(text)

    const handleAttach = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [
                    DocumentPicker.types.images,
                    DocumentPicker.types.plainText,
                    DocumentPicker.types.pdf,
                    DocumentPicker.types.doc,
                    DocumentPicker.types.docx,
                    DocumentPicker.types.xls,
                    DocumentPicker.types.xlsx,
                    DocumentPicker.types.ppt,
                    DocumentPicker.types.pptx
                ]
            })

            setFile({
                ...res,
                is_image: isImage(res.name)
            })

            console.log(
                res.uri,
                res.type,
                res.name,
                res.size
            )
        } catch (err) {
            if(!DocumentPicker.isCancel(err)) {
                alert(err)
            }
        }
    }

    const handleRemoveAttachment = () => setFile(null)

    const handleSend = () => {
        if(message || file) {
            setMessage('')
            setFile(null)

            dispatch({
                type: Actions.Types.ATTEMPT_SEND_MESSAGE,
                payload: {
                    message,
                    file
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

            <View style={{backgroundColor: Colors.light}}>
                {file &&
                <>
                    <Row bw style={{padding: Metrics.rg}}>
                        <Row>
                            <Icon name='paperclip' size={Metrics.icon.sm} color={Colors.gray} />
                            <Text sm mute numberOfLines={1}>{file.name}</Text>
                        </Row>

                        <IconButton color={Colors.primary} icon='close' onPress={handleRemoveAttachment} />
                    </Row>

                    <HR />
                </>
                }

                <Row>
                    {!file && <IconButton color={Colors.primary} icon='paperclip' onPress={handleAttach} />}

                    <TextInput
                        style={{flex: 1, backgroundColor: 'transparent'}}
                        value={message}
                        placeholder='Type here...'
                        onChangeText={handleChangeMessage}
                    />

                    <IconButton color={Colors.primary} icon='send' onPress={handleSend} />
                </Row>
            </View>
        </>
    )
}