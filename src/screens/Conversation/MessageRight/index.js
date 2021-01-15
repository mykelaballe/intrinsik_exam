import React from 'react'
import {View} from 'react-native'
import {Row, Text, Spacer} from '@components'
import style from './style'
import moment from 'moment'

export default ({data}) => (
    <Row style={{justifyContent: 'flex-end'}}>
        <View style={style.container}>
            <Text primary>{data.message}</Text>
            <Spacer xs />
            <Text xs primary r>{moment(data.timestamp).format('MMM DD, YYYY hh:mm a')}</Text>
        </View>
    </Row>
)