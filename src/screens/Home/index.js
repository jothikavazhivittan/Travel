import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import AttractionCard from '../../components/AttractionCard';
import jsonData from '../../data/Attraction.json';
import Categoryies from '../../data/Categoryies.json'
import { useNavigation } from '@react-navigation/native';
const ALL='All';
const Home = () => {
  const navigation=useNavigation()
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(()=>{
    if(selectedCategory === ALL){
      setData(jsonData)
    }else{
      const filtedData=jsonData ?.filter(item =>item ?. categories ?.includes(selectedCategory))
      setData(filtedData)
    }
  },[selectedCategory])
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
       data={data}
       style={{flexGrow:1,margin:20}}
        numColumns={2}
        ListEmptyComponent={(
        <Text style={styles.list}>Sorry No Item Found</Text>
        )}
        ListHeaderComponent={(
          <>
          <View style={{margin:20}}>
            <Title text="Where do" style={{fontWeight: 'normal'}} />
            <Title text="You want to go ?" />
            <Title text={'Explore Attractions'} style={styles.subTitle} />
            </View>
            <Categories
              selectedCategory={selectedCategory}
              categories={[ALL,...Categoryies]}
              onCategoryPress={setSelectedCategory}
            />
          </>
          )}
        keyExtractor={item => String(item?.id)}
         renderItem={({item, index}) => (
          <AttractionCard
            key={item.id}
            style={index % 2 === 0 
              ? {marginRight: 12,marginLeft:20}
               : {marginRight:20}}
               onPress={()=>navigation.navigate('AttractionDetails',{item})}
            subTitle={item.city}
            title={item.name}
            imageSrc={item.images?.length ? item.images[0] : null}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
