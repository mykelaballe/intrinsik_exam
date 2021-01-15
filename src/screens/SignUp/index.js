import React, {useState} from 'react'
import {View, Image} from 'react-native'
import {Screen, Button, ButtonText, TextInput, Spacer, Text} from '@components'
import {useSelector, useDispatch} from 'react-redux'
import Actions from '@actions'
import {Images} from '@themes'
import style from './style'

export default () => {

    const attempting = useSelector(({auth}) => auth.isAttemptingSignup)
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeName = text => setName(text)
    const handleChangeEmail = text => setEmail(text)
    const handleChangePassword = text => setPassword(text)

    const handleSubmit = () => {
        if(!attempting) {
            dispatch({
                type: Actions.Types.ATTEMPT_SIGNUP,
                payload: {
                    name,
                    email,
                    password
                }
            })
        }
    }

    return (
        <>
            <Screen>

                <View style={style.logoContainer}>
                    <Image source={Images.logo} style={style.logo} />
                </View>
                
                <Text lg b>Sign Up</Text>

                <Spacer sm />

                <TextInput
                    label='Name'
                    value={name}
                    onChangeText={handleChangeName}
                    autoCapitalize='words'
                />

                <Spacer sm />

                <TextInput
                    label='Email'
                    value={email}
                    onChangeText={handleChangeEmail}
                    keyboardType='email-address'
                />

                <Spacer sm />

                <TextInput
                    label='Password'
                    value={password}
                    onChangeText={handleChangePassword}
                    autoCapitalize='none'
                    secureTextEntry
                />

                <Spacer />

                <Button
                    disabled={!name || !email || !password || attempting}
                    title='Confirm'
                    onPress={handleSubmit}
                    loading={attempting}
                />
            </Screen>
        </>
    )
}