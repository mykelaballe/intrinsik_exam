import React from 'react'
import Button from '../Button'
import {Colors} from '@themes'

export default props => (
    <Button
        mode='text'
        labelStyle={{
            color: props.color || Colors.dark
        }}
        {...props}
    />
)