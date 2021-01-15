import * as React from 'react'
import {StackActions} from '@react-navigation/native'

let navigationRef = React.createRef()

export function setNavigator(ref) {
  navigationRef.current = ref
}

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params)
}

export function goBack() {
  navigationRef.current?.goBack()
}

export function navigator() {
  return navigationRef.current
}