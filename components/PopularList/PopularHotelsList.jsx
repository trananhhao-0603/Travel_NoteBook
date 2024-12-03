import { FlatList, View } from 'react-native'
import React from 'react'
import ReusableTitle from '../Reusable/ReusableTitle'
import { useNavigation } from '@react-navigation/native'

const PopularHotelsList = ({data}) => {
    const navigation = useNavigation();    
    const renderItem = ({item}) => (
        <View style={{marginBottom: 10}}>
            <ReusableTitle item={item} onPress={() => navigation.navigate('HotelDetails',item._id)}/>
        </View>
    )
  return (
    <FlatList
    data={data}
    scrollEnabled={false}
    showsVerticalScrollIndicator={false}
    renderItem={renderItem}
    />
  )
}

export default PopularHotelsList
