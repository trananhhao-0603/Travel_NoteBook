import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from '../../Reusable/reusable.style'
import { COLORS, TEXT } from '../../../constants/theme'
import ReusableText from '../../Reusable/ReusableText'

const SettingTile = ({onPress, title, title1}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[reusable.rowWithSpace("space-between"), styles.container]}
    >
      <ReusableText
        text={title}
        family={"regular"}
        size={TEXT.large}
        color={COLORS.dark}
      />
    </TouchableOpacity>
  );
}

export default SettingTile

const styles = StyleSheet.create({
  container:{
    borderBottomWidth: 1,
    borderColor: COLORS.lightGrey,
    paddingVertical: 15
  }
})