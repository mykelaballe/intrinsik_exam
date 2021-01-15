import {StyleSheet} from 'react-native'
import {Colors, Metrics} from '@themes'

export default StyleSheet.create({
    container: {
        minWidth: 200,
        backgroundColor: Colors.light,
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: Metrics.md,
        borderRadius: 10,
        margin: Metrics.rg
    }
})