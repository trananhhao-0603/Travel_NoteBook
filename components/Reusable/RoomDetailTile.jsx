import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from './reusable.style'
import { COLORS, SIZES } from '../../constants/theme'
import {HeightSpacer, NetworkImage, Rating, WidthSpacer} from '../../components/index'
import ReusableText from '../Reusable/ReusableText'
const RoomDetailTile = ({item, onPress, item1}) => {
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
            text={`Daystay: ${item1}`}
            family={"medium"}
            size={12}
            color={COLORS.gray}
          />

          <ReusableText
            text={`Total: $${item.price * item1}`}
            family={"medium"}
            size={12}
            color={COLORS.gray}
          />

          <HeightSpacer height={8} />

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

export default RoomDetailTile

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12
    }
})