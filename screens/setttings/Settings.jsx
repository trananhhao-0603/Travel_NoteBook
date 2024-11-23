import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {COLORS, SIZES} from '../../constants/theme'
import AppBar from '../../components/Reusable/AppBar'
import { HeightSpacer, ReusableText, SettingTile } from '../../components'
const Settings = ({navigation}) => {
  return (
    <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <View style={{ height: 100 }}>
        <AppBar
          color={COLORS.lightGreen}
          onPress={() => navigation.goBack()}
          top={40}
          left={20}
          right={20}
        />
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <ReusableText
          text={"Account Settings"}
          family={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />

        <HeightSpacer height={3} />

        <SettingTile title={"Language"} />

        <HeightSpacer height={3} />

        <SettingTile title={"Country"} title1={"USA"} />

        <HeightSpacer height={3} />

        <SettingTile title={"Currency"} title1={"USD"} />

        <HeightSpacer height={50} />

        <ReusableText
          text={"Support"}
          family={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />

        <HeightSpacer height={3} />

        <SettingTile title={"Get Help"} title1={""} />

        <HeightSpacer height={3} />

        <SettingTile title={"Give a feedback"} title1={""} />

        <HeightSpacer height={50} />

        <ReusableText
          text={"Legal"}
          family={"regular"}
          size={SIZES.xLarge}
          color={COLORS.black}
        />

        <HeightSpacer height={3} />

        <SettingTile title={"Terms of Service"} title1={""} />

        <HeightSpacer height={3} />

        <SettingTile title={"Privacy Policy"} title1={""} />

        <HeightSpacer height={10} />
      </View>
    </View>
  );
}

export default Settings

const styles = StyleSheet.create({})