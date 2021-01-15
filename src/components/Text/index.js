import React from 'react'
import {Text as Txt} from 'react-native-paper'
import {Colors, Metrics} from '@themes'

export default props => (
    <Txt
        {...props}
        
        style={[
            //bold
            props.b && {fontWeight: 'bold'},

            //alignment
            props.c && {textAlign: 'center'},
            props.r && {textAlign: 'right'},

            //sizes
            props.xs && {fontSize: Metrics.font.xs},
            props.sm && {fontSize: Metrics.font.sm},
            props.md && {fontSize: Metrics.font.md},
            props.lg && {fontSize: Metrics.font.lg},
            props.xl && {fontSize: Metrics.font.xl},
            props.h4 && {fontSize: Metrics.font.h4},
            props.h3 && {fontSize: Metrics.font.h3},

            //colors
            props.primary && {color: Colors.primary},
            props.light && {color: Colors.light},

            props.style
        ]}
    >
        {props.children}
    </Txt>
)