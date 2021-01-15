import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'
import {setNavigator} from '@services'
import {useSelector} from 'react-redux'

export default () => {

    const isLoggedIn = useSelector(({auth}) => auth.isLoggedIn)

    return (
        <NavigationContainer ref={ref => setNavigator(ref)}>
            {isLoggedIn || true ? <HomeStack /> : <AuthStack />}
        </NavigationContainer>
    )
}