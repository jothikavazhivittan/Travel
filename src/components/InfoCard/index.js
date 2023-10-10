import { Image,Text,SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles'
const InfoCard= ({text,style,icon}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={icon} style={styles.icon}/>
      <Text style={[styles.title,style]}>{text}</Text>
    </SafeAreaView>
  )
}

export default React.memo(InfoCard)

