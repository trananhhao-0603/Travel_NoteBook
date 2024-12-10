import { View, Text, Image, Alert, ActivityIndicator } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {TopBookings, TopInfo, TopTrips} from '../screens/index'
import { COLORS, SIZES } from '../constants/theme'
import { HeightSpacer, NetworkImage, ReusableText } from '../components'
import AppBar from '../components/Reusable/AppBar'
import styles from './topTap.style'
import checkUser from '../hook/checkUser'


const Tab = createMaterialTopTabNavigator()

const TopTab = ({navigation}) => {
  const {userLogin,userData ,isLoading, time}  = checkUser()
  if (isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue}/>
  }
  return (
    <>
      <AppBar
        top={40}
        left={20}
        right={20}
        paddingRight={40}
        color={COLORS.lightGreen}
        icon={"logout"}
        color1={COLORS.lightGreen}
        onPress={() => navigation.goBack()}
        onPress1={() => {
          Alert.alert("Confirm", "You are about to log out", [
            {
              text: "Cancel",
              onPress: () => {},
            },
            {
              text: "OK",
              onPress: () => navigation.navigate("Auth"),
            },
          ]);
        }}
      />
      <View style={{ flex: 1, marginTop: -30 }}>
        <View style={{ backgroundColor: COLORS.lightWhite }}>
          <View>
            <NetworkImage
              source={
                "https://lp-cms-production.imgix.net/2021-01/shutterstockRF_718619590.jpg"
              }
              width={"100%"}
              height={300}
              raidus={0}
            />

            <View style={styles.profile}>
              <Image
                source={{
                  uri: "https://cdn.popsww.com/blog/sites/2/2022/02/naruto-co-bao-nhieu-tap.jpg",
                }}
                style={styles.image}
              />

              <HeightSpacer height={5} />

              <View style={styles.name}>
                <View style={{ alignItems: "center" }}>
                  <ReusableText
                    text={userLogin ? `${userData.username}` : `${time} User!`}
                    family={"bold"}
                    size={SIZES.xLarge}
                    color={COLORS.black}
                  />
                </View>
              </View>

              <HeightSpacer height={5} />

              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={userLogin ? `${userData.email}` : `${time} trananhhao@gmail.com!`}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.white}
                />
              </View>
            </View>
          </View>
        </View>
        <Tab.Navigator>
          <Tab.Screen name="Bookings" component={TopBookings} />
          <Tab.Screen name="Info" component={TopInfo} />
        </Tab.Navigator>
      </View>
    </>
  );
}

export default TopTab