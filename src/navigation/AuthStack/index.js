import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import * as Scrn from '@screens'
import {Routes} from '@config'
import {Navigation} from '@themes'

const Stack = createStackNavigator()

export default () => {

    return (
        <Stack.Navigator
            initialRouteName={Routes.login}
            screenOptions={Navigation.defaultScreenOptions}
        >
            <Stack.Screen
                name={Routes.login}
                component={Scrn.Login}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name={Routes.signUp}
                component={Scrn.SignUp}
                options={{
                    title: 'Sign Up'
                }}
            />
        </Stack.Navigator>
    )
}