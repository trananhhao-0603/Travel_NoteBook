import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AssetImage, HeightSpacer, ReusableBtn, ReusableText } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import ReusableTitle from '../../components/Reusable/ReusableTitle'

const Failed = ({navigation}) => {
    const hotel ={
        "_id": "64c674d23cfa5e847bcd5430",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Seaside Resort",
        "imageUrl": "https://lh6.googleusercontent.com/proxy/gqbKG_s6ECx8nCvAW2vR_YuvU0GUOAA_KYFayI2FULUXFI4YPNpo46Br7ToQvEkjB95OtAO_f_D12yhMfQWMax_IlCF3dZaBJ8AsvB2e8l48",
        "rating": 4.9,
        "review": "1204 Reviews",
        "location": "Miami Beach, FL"
    }
  return (
    <View>
      <View style={{ marginTop: "40%" }}>
        <AssetImage
          data={require("../../assets/images/Falied.png")}
          width={"100%"}
          height={200}
          mode={"contain"}
        />

        <HeightSpacer height={40} />
        <View style={{ alignItems: "center" }}>
          <ReusableText
            text={"Booking Failed"}
            family={"medium"}
            size={TEXT.xLarge}
            color={COLORS.black}
          />

          <HeightSpacer height={20} />

          <ReusableText
            text={"Here is your booking details"}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
          />

          <HeightSpacer height={20} />
        </View>
        <View style={{ margin: 20 }}>
          <ReusableText
            text={"Room Details"}
            family={"bold"}
            size={SIZES.medium}
            color={COLORS.dark}
          />

          <HeightSpacer height={20} />

          <ReusableTitle item={hotel} />

          <HeightSpacer height={40} />

          <ReusableBtn
            onPress={() => navigation.goBack()}
            btnText={"Try Again"}
            width={SIZES.width - 40}
            backgroundColor={COLORS.red}
            borderColor={COLORS.red}
            borderWidth={0}
            textColor={COLORS.white}
          />
        </View>
      </View>
    </View>
  );
}

export default Failed

const styles = StyleSheet.create({})