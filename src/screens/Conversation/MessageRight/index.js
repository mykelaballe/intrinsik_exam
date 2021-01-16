import React from 'react'
import {View, Image} from 'react-native'
import {Row, Text, Spacer} from '@components'
import {Colors, Metrics} from '@themes'
import style from './style'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({data}) => (
    <Row style={{justifyContent: 'flex-end'}}>
        <View style={style.container}>
            {data.file &&
            <>
                {data.file.is_image && <Image source={{uri: data.file.uri}} style={style.image} />}
                
                {!data.file.is_image &&
                <Row>
                    <Icon name='paperclip' size={Metrics.icon.sm} color={Colors.primary} />
                    <Text sm primary>Attachment</Text>
                    <Spacer />
                </Row>
                }
            </>
            }
            <Text primary>{data.message}</Text>
            <Spacer xs />
            <Text xs primary r>{moment(data.timestamp).format('MMM DD, YYYY hh:mm a')}</Text>
        </View>
    </Row>
)