import React from 'react'
import {View} from 'react-native'
import hrStyle from './style'
import {Metrics} from '@themes'

export default ({mv, style}) => (
    <View
        style={[
            hrStyle.container,
            mv && {marginVertical: Metrics.rg},
            style
        ]}
    />
)