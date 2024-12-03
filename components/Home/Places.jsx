import { ActivityIndicator, View, VirtualizedList } from 'react-native'
import React from 'react'
import HeightSpacer from '../Reusable/HeightSpacer'
import Country from '../Tiles/Country/Country'
import { COLORS, SIZES } from '../../constants/theme'
import fetchCountries from '../../hook/fetchCountries'

const Places = () => {
  const {countries, isLoading, error, refetch} = fetchCountries();

  if (isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue}/>
  }
  return (
    <View>
      <HeightSpacer height={20}/>
      <VirtualizedList
      data={countries}
      horizontal
      keyExtractor={(item) => item._id}
      showsHorizontalScrollIndicator={false}
      getItemCount={(data) => data.length}
      getItem={(data,index) => data[index]}
      renderItem={({item}) => (
        <View style={{marginRight:SIZES.xSmall}}>
            <Country item={item}/>
        </View>
      )}
      />
    </View>
  )
}

export default Places
