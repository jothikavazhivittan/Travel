import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
const Title = ({text,style}) => {
  return (
    <View>
      <Text style={[styles.title,style]}>{text}</Text>
    </View>
  )
}
Title.defaultProps={
    text:''
}
export default Title

