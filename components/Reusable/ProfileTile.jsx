import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from './reusable.style'
import {AntDesign} from '@expo/vector-icons'
import WidthSpacer from './WidthSpacer'
import ReusableText from './ReusableText'
import { COLORS, SIZES } from '../../constants/theme'
const ProfileTile = ({onPress, title, icon}) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress}>
      <View style={reusable.rowWithSpace("space-between")}>
        <View style={reusable.rowWithSpace("flex-start")}>
          <AntDesign name={icon} size={20} />

          <WidthSpacer width={15} />

          <ReusableText
            text={title}
            family={"regular"}
            size={SIZES.medium}
            color={COLORS.gray}
          />


        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ProfileTile

const styles = StyleSheet.create({
  tile: {
    padding: 15,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
    marginBottom: 15,
  },
});