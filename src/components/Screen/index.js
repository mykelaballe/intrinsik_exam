import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import screenStyle from './style'

export default props => (
    <SafeAreaView style={[screenStyle.container, props.style]}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
            {props.children}
        </KeyboardAwareScrollView>
    </SafeAreaView>
)