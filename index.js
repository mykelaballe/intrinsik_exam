import 'react-native-gesture-handler'
import React from 'react'
import {AppRegistry} from 'react-native'
import App from './src/App'
import {Provider} from 'react-redux'
import store from '@store'
import {name as appName} from './app.json'

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Root)