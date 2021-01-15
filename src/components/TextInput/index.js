import React, {forwardRef} from 'react'
import {TextInput as Input} from 'react-native-paper'
import {Colors} from '@themes'

export default forwardRef((props, ref) => (
    <Input
        ref={ref}
        mode={props.mode || 'flat'}
        theme={{
            colors:{
                primary: Colors.primary
            }
        }}
        style={{
            backgroundColor: 'transparent'
        }}
        {...props}
    />
))