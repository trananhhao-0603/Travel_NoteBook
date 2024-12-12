import { View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import {DescriptionText, HeightSpacer, NetworkImage, ReusableBtn, ReusableText, } from '../../components/index'
import AppBar from '../../components/Reusable/AppBar'
import PopularHotelsList from '../../components/PopularList/PopularHotelsList'
import { COLORS,  SIZES,  TEXT } from '../../constants/theme'
import reusable from '../../components/Reusable/reusable.style'
import {Feather} from '@expo/vector-icons'
import fetchPlace from '../../hook/fetchPlace'
import MiniMap from '../../components/Map/MiniMap'

const PlaceDetails = ({navigation}) => {
  const route = useRoute();
  const id = route.params
  const {place, isLoading, coordinates,error, refetch} = fetchPlace(id)
  
  if (isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue}/>
  }
  return (
    <>
      <AppBar
        top={40}
        left={10}
        right={10}
        paddingRight={20}
        title={place.title}
        titleColor={COLORS.lightWhite}
        color={COLORS.lightGreen}
        icon={"search1"}
        color1={COLORS.lightGreen}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate("Search")}
      />
      <ScrollView style={{ marginTop: -30 }}>
        <View>
          <NetworkImage
            source={place.imageUrl}
            width={"100%"}
            height={350}
            raidus={0}
          />
        </View>

        <View style={styles.description}>
          <ReusableText
            text={place.location}
            family={"medium"}
            size={TEXT.xLarge}
            color={COLORS.black}
          />

          <DescriptionText text={place.description} />

          <HeightSpacer height={20} />

          <MiniMap coordinates={coordinates} />

          <HeightSpacer height={20} />
          <View style={{ alignContent: "center" }}>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Popular Hotels"}
                family={"medium"}
                size={TEXT.xLarge}
                color={COLORS.black}
              />

              {/* <TouchableOpacity onPress={() => navigation.navigate('HotelList')}>
              <Feather name="list" size={20} />
            </TouchableOpacity> */}
            </View>

            <HeightSpacer height={20} />
            <PopularHotelsList data={place.popular} />

            <HeightSpacer height={20} />
            <ReusableBtn
              onPress={() => navigation.navigate("HotelSearch")}
              btnText={"Find Best Hotels"}
              width={SIZES.width - 40}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
            <HeightSpacer height={20} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default PlaceDetails

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F3F4F8',
  },
  description:{
    marginHorizontal: 20,
    paddingTop: 20
  }
})