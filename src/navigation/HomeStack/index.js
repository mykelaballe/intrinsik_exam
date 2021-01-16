import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import * as Scrn from '@screens'
import {Routes} from '@config'
import {Colors, Navigation} from '@themes'
import {IconButton} from 'react-native-paper'
import {useSelector, useDispatch} from 'react-redux'
import Actions from '@actions'

const Stack = createStackNavigator()

export default () => {

    const {data} = useSelector(({user}) => user)

    const dispatch = useDispatch()

    const handleLogout = () => dispatch({type: Actions.Types.LOGOUT})

    return (
        <Stack.Navigator
            initialRouteName={Routes.conversation}
            screenOptions={Navigation.defaultScreenOptions}
        >
            <Stack.Screen
                name={Routes.conversation}
                component={Scrn.Conversation}
                options={{
                    title: 'Conversation',
                    headerRight: () => <IconButton color={Colors.primary} icon='logout' onPress={handleLogout} />
                }}
            />
        </Stack.Navigator>
    )
}