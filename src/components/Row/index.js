import React from 'react'
import {View} from 'react-native'
import rowStyle from './style'

export default ({bw, c, ar, children, style}) => (
    <View style={[
        rowStyle.container,
        bw && {justifyContent: 'space-between'},
        style
    ]}>
        {children}
    </View>
)