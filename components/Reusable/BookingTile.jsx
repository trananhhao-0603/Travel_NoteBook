import {  StyleSheet, Text, View } from 'react-native'
import React  from 'react'
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';
import { AssetImage, HeightSpacer, NetworkImage, Rating,  ReusableText, WidthSpacer } from '../../components';

const BookingTile = ({item, item1}) => {
  return (
    <View style={{marginBottom: 20}}>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 20 }}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={200}
            raidus={20}
          />

          <HeightSpacer height={20} />

          <View style={{ marginHorizontal: 10 }}>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={item.title}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <View style={reusable.rowWithSpace("flex-start")}>
                <Rating rating={item.rating} />

                <WidthSpacer width={10} />

                <ReusableText
                  text={`(${item.review})`}
                  family={"regular"}
                  size={SIZES.small}
                  color={COLORS.gray}
                />
              </View>
            </View>

            <HeightSpacer height={10} />

            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.lightGrey,
                marginVertical: 15,
              }}
            ></View>
            <HeightSpacer height={10} />

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Days stay"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              /><ReusableText
              text={`${item1.daystay}`}
              family={"regular"}
              size={SIZES.medium}
              color={COLORS.black}
            />
            </View>

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Total"}
                family={"bold"}
                size={SIZES.xLarge}
                color={COLORS.black}
              />
              <View style={reusable.rowWithSpace("flex-start")}>
                <ReusableText
                  text={`$${item1.daystay * item.price}`}
                  family={"regular"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>
            <HeightSpacer height={30} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default BookingTile

const styles = StyleSheet.create({})