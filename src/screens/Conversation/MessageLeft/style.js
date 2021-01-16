import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '@themes'

export default StyleSheet.create({
    container: {
        minWidth: 200,
        backgroundColor: Colors.primary,
        padding: Metrics.md,
        borderRadius: 10,
        margin: Metrics.rg
    },
    image: {
        width: undefined,
        height: 150,
        marginBottom: Metrics.sm,
        resizeMode: 'cover'
    }
})