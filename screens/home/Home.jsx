import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import { ReusableText,HeightSpacer } from '../../components'
import Places from '../../components/Home/Places'
import { COLORS,  SIZES,  TEXT } from '../../constants/theme'
import BestHotels from '../../components/Home/BestHotels'
import Recommendations from '../../components/Home/Recommendations'
import {AntDesign} from '@expo/vector-icons'
import homeStyles from './home.style'
import checkUser from '../../hook/checkUser'

const Home = ({navigation}) => {
  const {userLogin,userData ,isLoading, time, token}  = checkUser()
  if (isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue}/>
  }
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={userLogin ? `${time} ${userData.username}` : `${time} User!`}
            family={"regular"}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity
            style={homeStyles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge} />

        <ReusableText
          text={"Places"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />
        <Places />

        <HeightSpacer height={15} />

        <Recommendations />

        <HeightSpacer height={30} />

        <BestHotels />
      </View>
    </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({})