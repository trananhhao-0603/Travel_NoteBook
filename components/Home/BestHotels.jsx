import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ReusableText from '../Reusable/ReusableText'
import reusable from '../Reusable/reusable.style'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import HotelCard from '../Tiles/Hotels/HotelCard'
import fetchHotels from '../../hook/fetchHotels'

const BestHotels = () => {
    const navigation = useNavigation();
    const {hotels, isLoading, error, refetch} = fetchHotels();

  if (isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue}/>
  }
  return (
    <View >
      <View style={[reusable.rowWithSpace('space-between'),{paddingBottom: 20}]}>
        <ReusableText
          text= {'Recommended Hotels'}
          family={'medium'}
          size={TEXT.large}
          color={COLORS.black}
          />
        
        <TouchableOpacity onPress={()=> navigation.navigate('HotelList')}>
          <Feather
          name='list'
          size={20}
          />
        </TouchableOpacity>
      </View>
      <FlatList
      data={hotels}
      horizontal
      keyExtractor={(item) => item._id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{columnGap: SIZES.medium}}
      renderItem={({item}) => (
        <HotelCard item={item} margin={0} onPress={()=> navigation.navigate('HotelDetails',item._id)}/>
      )}
      />      
      
    </View>
  )
}

export default BestHotels

const styles = StyleSheet.create({})