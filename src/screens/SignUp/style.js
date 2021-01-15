import {StyleSheet} from 'react-native'
import {Metrics} from '@themes'

export default StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginVertical: Metrics.xl
    },
    logo: {
        width: 200,
        height: 150,
        resizeMode: 'contain'
    }
})