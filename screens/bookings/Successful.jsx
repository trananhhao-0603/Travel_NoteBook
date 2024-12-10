import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AssetImage, HeightSpacer, ReusableBtn, ReusableText } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import ReusableTitle from '../../components/Reusable/ReusableTitle'
import RoomDetailTile from '../../components/Reusable/RoomDetailTile'
import { useRoute } from '@react-navigation/native'
const Successful = ({navigation}) => {
  const route = useRoute();
  const {item, count} = route.params
  
  return (
    <View>
      <View style={{ marginTop: "40%" }}>
        <AssetImage
          data={require("../../assets/images/checked.png")}
          width={"100%"}
          height={200}
          mode={"contain"}
        />

        <HeightSpacer height={40} />
        <View style={{ alignItems: "center" }}>
          <ReusableText
            text={"Booking Successfully"}
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

          <HeightSpacer height={20}/>

          <RoomDetailTile item={item} item1={count} />

          <HeightSpacer height={40}/>

          <ReusableBtn
            onPress={() => navigation.navigate("Bottom")}
            btnText={"Done"}
            width={SIZES.width - 40}
            backgroundColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />

        </View>
      </View>
    </View>
  );
}

export default Successful

const styles = StyleSheet.create({})