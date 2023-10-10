import { Text, View,SafeAreaView ,ImageBackground,Pressable,Image, ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles';
import Title from '../../components/Title';
import InfoCard from '../../components/InfoCard';
import Share from 'react-native-share';
import MapView, { Marker } from 'react-native-maps';
import ImgToBase64 from 'react-native-image-base64';

const AttractionDetails = ({navigation,route}) => {
  const {item}=route?.params || {};
  const mainImage=item ?.images ?.length ? item ?. images[0] : null;
  const sliceImages=item ?. images?. length ? item?. images.slice(0,5) :[];
  const diffImages=item?. images?. length - sliceImages?.length
  const openingHours= `OPEN 
${ item?.opening_time } - ${ item?.closing_time }`
 
  const coords = {
  latitude: item?.coordinates?.lat,
  longitude: item?.coordinates?.lon,
  longitudeDelta: 0.009,
  latitudeDelta: 0.009,
};


const onBack= () => {
    navigation.goBack();
  }
  const onGalleryNavigate=()=>{
   navigation.navigate('Gallery',{images: item?. images})
  }
  const onShare= async()=>{
    try{
      const imageWithoutParams=mainImage?.split('?')[0]
      const imageParts=imageWithoutParams?.split('.')
      const imageExtension=imageParts[imageParts?.length-1]
      const base64Image= await ImgToBase64.getBase64String(mainImage)
  Share.open({
      title:item?.name,
      message:'Hey,I wanted to share with you this amazing attraction',
      url:`data:image/ ${imageExtension || 'jpg'};base64, ${base64Image}`
    })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    err && console.log(err);
  });
  } catch(e){
    console.log('sharing error',e);
  }
  }
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        style={styles.mainImage} 
        imageStyle={{borderRadius:5}}
        source={{uri:mainImage}}>
         <View style={styles.header}>
          <Pressable onPress={onBack} hitSlop={8}>
          <Image style={styles.icon} source={require('../../assets/images/Arrow.png')}/>
          </Pressable>
          <Pressable onPress={onShare} hitSlop={8}>
          <Image style={styles.share} source={require('../../assets/images/Sharing.png')}/>
          </Pressable>
         </View>
         <Pressable onPress={onGalleryNavigate} style={styles.footer}>
          {sliceImages?. map((image,index)=>(
          <View key={image}>
           <Image  source={{uri:image}} style={styles.smallImage}/>
           {diffImages > 0 && index === sliceImages?.length -1 ?(
            <View style={styles.moreImageContainer}>
           <Text style={styles.moreImage}>{`+${diffImages}`}</Text>
           </View>
           ):null}
           </View>
           ))}
         </Pressable>
      </ImageBackground>
      <View style={styles.headerContainer}>
      <View style={{maxWidth:"70%"}}>
      <Title style={styles.title} text={item?.name}/>
      <Text style={styles.city}>{item?.city}</Text>
      </View>
          <Title style={styles.title} text={item?.entry_price}/>
      </View>
      <InfoCard text={item?.address} icon={require('../../assets/images/Lo.png')}/>

      <InfoCard text={openingHours} 
          icon={require('../../assets/images/Time.png')}/>

      <MapView style={styles.map} initialRegion={coords}>
          <Marker coordinate={coords} title={item?.name} />
          </MapView>

     <View>
     <Text style={styles.mapText} onPress={() => navigation.navigate('Map', { item })}>Show full screen map</Text>
      </View>  
   </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(AttractionDetails)

