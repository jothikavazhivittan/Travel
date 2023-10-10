import { FlatList,  Image,  Pressable,  Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import styles from './styles'

const AttractionCard = ({imageSrc,title,subTitle,style,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card ,style]}>
      <Image style={styles.image} source={{uri:imageSrc}}/>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image 
        style={styles.icon}
        source={require('../../assets/images/Location.png')}/>
        <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    </TouchableOpacity>
     )
}

export default React.memo(AttractionCard)

