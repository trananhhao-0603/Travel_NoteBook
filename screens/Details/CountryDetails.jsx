import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {DescriptionText, HeightSpacer, NetworkImage, PopularList, ReusableBtn, ReusableText, } from '../../components/index'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS,  SIZES,  TEXT } from '../../constants/theme'
import reusable from '../../components/Reusable/reusable.style'
import {Feather} from '@expo/vector-icons'
const CountryDetails = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params;
  console.log(item);
  const country = {
    "_id": "64c62bfc65af9f8c969a8d04",
    "country": "USA",
    "description": "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
    "imageUrl": "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
    "popular": [
        {
            "_id": "64c631650298a05640539adc",
            "title": "Walt Disney World",
            "imageUrl": "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
            "rating": 4.7,
            "review": "1204 Reviews",
            "location": "Orlando, USA"
        },
        {
            "_id": "64d062a3de20d7c932f1f70a",
            "title": "Statue of Liberty",
            "imageUrl": "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
            "rating": 4.8,
            "review": "1452 Reviews",
            "location": "Liberty Island, New York Harbor"
        }
    ],
    "region": "North America, USA"
}
  return (
      <ScrollView >
        <View >
          <NetworkImage 
          source={country.imageUrl}
          width={'100%'}
          height={350}
          raidus={0}
          />

          <AppBar
          top={40}
          left={10}
          right={10}
          title={country.country}
          color={COLORS.lightGreen}
          icon={'search1'}
          color1={COLORS.lightGreen}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
          />
        </View>

        <View style={styles.description}>
          <ReusableText
            text= {country.region}
            family={'medium'}
            size={TEXT.xLarge}
            color={COLORS.black}
            />

          <DescriptionText text={country.description}/>
          <View style={{alignContent: 'center'}}>
            <View style={reusable.rowWithSpace('space-between')}>
              <ReusableText
              text= {'Popular Destinations'}
              family={'medium'}
              size={TEXT.xLarge}
              color={COLORS.black}
              />

              <TouchableOpacity onPress={()=> {}}>
                <Feather
                name='list'
                size={20}
                />
              </TouchableOpacity>
            </View>
            <HeightSpacer height={20}/>
            <PopularList data={country.popular}/>

            <HeightSpacer height={20}/> 
              <ReusableBtn  
                onPress={()=> navigation.navigate('HotelSearch')}
                btnText={"Find Best Hotels"}
                width={SIZES.width-40}
                backgroundColor={COLORS.green}
                borderColor={COLORS.green}
                borderWidth={0}
                textColor={COLORS.white}
                />
              <HeightSpacer height={20}/>           
          </View>
        </View>
      </ScrollView>
      
  )
}

export default CountryDetails

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F3F4F8',
  },
  description:{
    marginHorizontal: 20,
    paddingTop: 20
  }
})