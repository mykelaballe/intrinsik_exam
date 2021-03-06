import React from 'react'
import {View, Image} from 'react-native'
import {Row, Text, Spacer} from '@components'
import {Colors, Metrics, Images} from '@themes'
import style from './style'
import moment from 'moment'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({data}) => (
    <Row>
        <View style={style.container}>
            <Text light b sm>{data.name}</Text>

            {data.file &&
            <>
                {data.file.is_image && <Image source={Images.defaultImage} style={style.image} />}
                
                {!data.file.is_image &&
                <Row>
                    <Icon name='paperclip' size={Metrics.icon.sm} color={Colors.light} />
                    <Text sm light>Attachment</Text>
                    <Spacer />
                </Row>
                }
            </>
            }
            
            <Text light>{data.message}</Text>
            <Spacer xs />
            <Text xs light r>{moment(data.timestamp).format('MMM DD, YYYY hh:mm a')}</Text>
        </View>
    </Row>
)