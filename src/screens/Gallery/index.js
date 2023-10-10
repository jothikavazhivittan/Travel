import { StyleSheet, Text, View ,FlatList,Image,SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles';

const Gallery = ({navigation,route}) => {
  const {images}=route.params ||{};
  const onBack=()=>{
    navigation.goBack()
  }
  return (
    <SafeAreaView >
      <View>
      <FlatList style={{paddingHorizontal:24,marginBottom:24}} data={images} renderItem={({item})=>(
        <Image source={{uri:item}} style={styles.image}/>
      )}/>
      <TouchableOpacity onPress={onBack} style={styles.backContainers}>
         <Image source={require('../../assets/images/Arrow.png')}
           style={styles.back}/>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default React.memo(Gallery)

