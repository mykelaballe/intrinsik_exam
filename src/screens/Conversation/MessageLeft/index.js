import React from 'react'
import {View} from 'react-native'
import {Row, Text, Spacer} from '@components'
import style from './style'
import moment from 'moment'

export default ({data}) => (
    <Row>
        <View style={style.container}>
            <Text light>{data.message}</Text>
            <Spacer xs />
            <Text xs light r>{moment(data.timestamp).format('MMM DD, YYYY hh:mm a')}</Text>
        </View>
    </Row>
)