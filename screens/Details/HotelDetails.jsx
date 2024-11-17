import { ScrollView,  Text, View } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import styles from './hotelDetails.style'
import { DescriptionText, HeightSpacer, NetworkImage, ReusableText } from '../../components'
import reusable from '../../components/Reusable/reusable.style'
import {Rating} from 'react-native-stock-star-rating'

const HotelDetails = ({navigation}) => {
  const hotel = {
    availability: {
      start: "2023-08-20T00:00:00.000Z",
      end: "2023-08-25T00:00:00.000Z",
    },
    _id: "64c675793cfa5e847bcd5436",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Urban Chic Boutique Hotel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    contact: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://media.vneconomy.vn/images/upload/2023/07/06/1688465738-grasp-the-rainy-season-travel-tips-to-da-lat.jpg",
    rating: 4.8,
    review: "2312 Reviews",
    location: "San Francisco, CA",
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    price: 400,
    facilities: [
      {
        wifi: true,
        _id: "64c675793cfa5e847bcd5437",
      },
    ],
    __v: 0,
  };
  return (
    <View>
      <View style={{ height: 80 }}>
        <AppBar
          top={40}
          left={10}
          right={10}
          title={hotel.title}
          color={COLORS.lightGreen}
          icon={"search1"}
          color1={COLORS.lightGreen}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View>
        <View style={styles.container}>
          <NetworkImage
            source={hotel.imageUrl}
            width={"100%"}
            height={220}
            raidus={25}
          />

          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <ReusableText
                text={hotel.title}
                family={"medium"}
                size={SIZES.xLarge}
                color={COLORS.black}
              />

              <HeightSpacer height={10} />

              <ReusableText
                text={hotel.location}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <HeightSpacer height={15} />

              <View style={reusable.rowWithSpace("space-between")}>
                <Rating
                  maxStars={5}
                  stars={hotel.rating}
                  bordered={false}
                  color={"#FD9942"}
                />

                <ReusableText
                  text={`(${hotel.review})`}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.container, { paddingTop: 90 }]}>
          <ReusableText
            text={"Description"}
            family={"medium"}
            size={SIZES.xLarge}
            color={COLORS.black}
          />

          <DescriptionText text={hotel.description} />

          <HeightSpacer height={10} />

          <ReusableText
            text={"Location"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={15} />

          <ReusableText
            text={hotel.location}
            family={"regular"}
            size={SIZES.small+2}
            color={COLORS.gray}
          />
        </View>
      </View>
    </View>
  );
}

export default HotelDetails
