import { ActivityIndicator, FlatList, View } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, SIZES } from '../../constants/theme'
import ReusableTitle from '../../components/Reusable/ReusableTitle'
import {SafeAreaView} from 'react-native-safe-area-context'
import fetchHotels from '../../hook/fetchHotels'
const HotelList = ({navigation}) => {
  const {hotels, isLoading, error, refetch} = fetchHotels();

  if (isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue}/>
  }
  return (
    <>
    <AppBar
          title={"Recommended Hotels"}
          color={COLORS.lightGreen}
          color1={COLORS.lightGreen}
          icon={"search1"}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("HotelSearch")}
          top={40}
          left={20}
          right={0}
          paddingRight={40}
        />
    <SafeAreaView style={{ marginHorizontal: 20, marginBottom: 150 }}>
      <View style={{ height: 70 }}>
        
      </View>

      <View style={{ paddingTop: 0 }}>
        <FlatList
          data={hotels}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTitle
                item={item}
                onPress={() => navigation.navigate("HotelDetails", item._id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
    </>
  );
}

export default HotelList
