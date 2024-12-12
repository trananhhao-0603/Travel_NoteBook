import { View, StyleSheet, ScrollView,  ActivityIndicator } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import {DescriptionText, HeightSpacer, NetworkImage, ReusableBtn, ReusableText, } from '../../components/index'
import AppBar from '../../components/Reusable/AppBar'
import PopularPlacesList from '../../components/PopularList/PopularPlacesList'
import { COLORS,  SIZES,  TEXT } from '../../constants/theme'
import reusable from '../../components/Reusable/reusable.style'
import fetchCountry from '../../hook/fetchCountry'
import fetchPlaceByCountry from '../../hook/fetchPlacesByCountry'
import CountryMiniMap from '../../components/Map/CountryMiniMap'
const CountryDetails = ({navigation}) => {
  const route = useRoute();
  const id = route.params;
  const {country, isLoading, error, refetch} = fetchCountry(id)
  const {place,coordinates, isLoading1, error1, refetch1} = fetchPlaceByCountry(id)
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
          title={country.country}
          titleColor={COLORS.lightWhite}
          color={COLORS.lightGreen}
          icon={"search1"}
          color1={COLORS.lightGreen}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("Search")}
          
        />
    <ScrollView style={{marginTop: -30}}>
      
      <View>
        <NetworkImage
          source={country.imageUrl}
          width={"100%"}
          height={350}
          raidus={0}
        />
      </View>

      <View style={styles.description}>
        <ReusableText
          text={country.region}
          family={"medium"}
          size={TEXT.xLarge}
          color={COLORS.black}
        />

        <DescriptionText text={country.description} />
        <View style={{ alignContent: "center" }}>
          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Popular Destinations"}
              family={"medium"}
              size={TEXT.xLarge}
              color={COLORS.black}
            />

            {/* <TouchableOpacity onPress={()=> {}}>
                <Feather
                name='list'
                size={20}
                />
              </TouchableOpacity> */}
          </View>
          <HeightSpacer height={20} />

          <CountryMiniMap placeCoordinates={coordinates}/>
          <HeightSpacer height={20} />

          <PopularPlacesList data={country.popular} />

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