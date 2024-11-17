import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import {DescriptionText, HeightSpacer, NetworkImage, ReusableBtn, ReusableText, } from '../../components/index'
import AppBar from '../../components/Reusable/AppBar'
import PopularList from '../../components/Country/PopularList'
import { COLORS,  SIZES,  TEXT } from '../../constants/theme'
import reusable from '../../components/Reusable/reusable.style'
import {Feather} from '@expo/vector-icons'

const PlaceDetails = ({navigation}) => {
  const route = useRoute();
  const id = route.params
  const place = {
    "_id": "64d062a3de20d7c932f1f70a",
    "country_id": "64c62bfc65af9f8c969a8d04",
    "title": "Statue of Liberty",
    "description": "The Statue of Liberty is an iconic symbol of freedom and democracy, located on Liberty Island in New York Harbor. This colossal statue was a gift from France to the United States and was dedicated in 1886. Standing at 305 feet tall, the statue represents Libertas, the Roman goddess of liberty, holding a torch and a tablet inscribed with the date of the American Declaration of Independence. The Statue of Liberty has welcomed countless immigrants to the USA, serving as a symbol of hope and opportunity.",
    "contact_id": "64c5d95adc7efae2a45ec376",
    "imageUrl": "https://agotourist.com/wp-content/uploads/2021/10/thanh-pho-da-lat-2.jpg",
    "rating": 4.8,
    "review": "1452 Reviews",
    "latitude": 40.689247,
    "longitude": -74.044502,
    "location": "Liberty Island, New York Harbor",
    "popular": [
        {
            "_id": "64c675be3cfa5e847bcd5439",
            "title": "Family-Friendly Resort",
            "imageUrl": "https://agotourist.com/wp-content/uploads/2021/10/thanh-pho-da-lat-2.jpg",
            "rating": 4.6,
            "review": "12854 Reviews",
            "location": "Orlando, FL"
        },
        {
            "_id": "64c675793cfa5e847bcd5436",
            "title": "Urban Chic Boutique Hotel",
            "imageUrl": "https://agotourist.com/wp-content/uploads/2021/10/thanh-pho-da-lat-2.jpg",
            "rating": 4.8,
            "review": "2312 Reviews",
            "location": "San Francisco, CA"
        }
    ]
}
  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={place.imageUrl}
          width={"100%"}
          height={350}
          raidus={0}
        />

        <AppBar
          top={40}
          left={10}
          right={10}
          title={place.title}
          color={COLORS.lightGreen}
          icon={"search1"}
          color1={COLORS.lightGreen}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
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
        <View style={{ alignContent: "center" }}>
          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Popular Hotels"}
              family={"medium"}
              size={TEXT.xLarge}
              color={COLORS.black}
            />

            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>
          <HeightSpacer height={20} />
          <PopularList data={place.popular} />

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