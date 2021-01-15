import React from 'react'
import {Button as Btn} from 'react-native-paper'
import {Colors} from '@themes'

export default props => {

    const mode = props.mode || 'contained'

    return (
        <Btn
            uppercase={false}
            mode={mode}
            color={props.color || Colors.primary}
            contentStyle={{
                height: mode == 'contained' ? 60 : undefined
            }}
            labelStyle={{
                fontWeight: 'bold',
                color: Colors.light
            }}
            {...props}
        >
            {props.title}
        </Btn>
    )
}