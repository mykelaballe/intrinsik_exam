import React, {useState} from 'react'
import {View, Image} from 'react-native'
import {Screen, Button, ButtonText, TextInput, Spacer, Text} from '@components'
import {useSelector, useDispatch} from 'react-redux'
import Actions from '@actions'
import {Colors, Images} from '@themes'
import {Routes} from '@config'
import style from './style'

export default ({navigation}) => {

    const attempting = useSelector(({auth}) => auth.isAttemptingLogin)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeEmail = text => setEmail(text)
    const handleChangePassword = text => setPassword(text)

    const handleLogin = () => {
        if(!attempting) {
            dispatch({
                type: Actions.Types.ATTEMPT_LOGIN,
                payload: {
                    email,
                    password
                }
            })
        }
    }

    const handleSignUp = () => navigation.navigate(Routes.signUp)

    return (
        <>
            <Screen>

                <View style={style.logoContainer}>
                    <Image source={Images.logo} style={style.logo} />
                </View>
                
                <Text lg b>Sign In</Text>

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
                    disabled={!email || !password || attempting}
                    title='Sign In'
                    onPress={handleLogin}
                    loading={attempting}
                />

                <Spacer sm />

                <ButtonText disabled={attempting} color={Colors.primary} title='Sign Up' onPress={handleSignUp} />
            </Screen>
        </>
    )
}