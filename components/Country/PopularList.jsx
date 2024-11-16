import { FlatList, View } from 'react-native'
import React from 'react'
import ReusableTitle from '../Reusable/ReusableTitle'
import { useNavigation } from '@react-navigation/native'

const PopularList = ({data}) => {
    const navigation = useNavigation();    
    const renderItem = ({item}) => (
        <View style={{marginBottom: 10}}>
            <ReusableTitle item={item} onPress={() => navigation.navigate('PlaceDetails')}/>
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

export default PopularList
