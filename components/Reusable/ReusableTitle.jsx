import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from './reusable.style'
import { COLORS, SIZES } from '../../constants/theme'
import {HeightSpacer, NetworkImage, Rating, WidthSpacer} from '../../components/index'
import ReusableText from '../Reusable/ReusableText'
const ReusableTitle = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={reusable.rowWithSpace("flex-start")}>
        <NetworkImage
          source={item.imageUrl}
          width={80}
          height={80}
          raidus={12}
        />
        <WidthSpacer width={15} />
        <View style={{ paddingRight: 100 }}>
          <ReusableText
            text={item.title}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
          />

          <HeightSpacer height={8} />

          <ReusableText
            text={item.location}
            family={"medium"}
            size={10}
            color={COLORS.gray}
          />

          <HeightSpacer height={8} />

          {item.price && (
            <ReusableText
              text={`${item.price}$/night `}
              family={"medium"}
              size={14}
              color={COLORS.gray}
            />
          )}
          {item.price && (
            <HeightSpacer height={8} />
          )}

          

          <View style={reusable.rowWithSpace("flex-start")}>
            <Rating rating={item.rating} />

            <WidthSpacer width={5} />

            <ReusableText
              text={` (${item.review}) `}
              family={"medium"}
              size={14}
              color={COLORS.gray}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ReusableTitle

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12
    }
})