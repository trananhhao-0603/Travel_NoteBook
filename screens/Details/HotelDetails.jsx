import { ScrollView,  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import styles from './hotelDetails.style'
import { DescriptionText, HeightSpacer, HotelMap, NetworkImage, ReusableBtn, ReusableText, ReviewsList } from '../../components'
import reusable from '../../components/Reusable/reusable.style'
import {Rating} from 'react-native-stock-star-rating'
import {Feather} from '@expo/vector-icons'

const HotelDetails = ({navigation}) => {
  const hotel = {
    availability: {
      start: "2023-08-20",
      end: "2023-08-25",
    },
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
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

    price: 400,
    facilities: [
      {
        wifi: true,
        _id: "64c675793cfa5e847bcd5437",
      },
    ],
    __v: 1,
    "reviews": [
      {
        "_id": "64c675793cfa5e847bcd54",
        "review":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
        "rating": 4.6,
        "user": {
          "_id": "64c675793cfa5e847bcd59",
          "username": "John Doe",
          "profile":
            "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
        },
        "updatedAt": "2023-08-25",
      },
      {
        "_id": "64c675793cfa5e847bcd56",
        "review":
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
        "rating": 4.7,
        "user": {
          "_id": "64c675793cfa5e847bcd51",
          "username": "Hena Doe",
          "profile":
            "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
        },
        "updatedAt": "2023-08-25",
      },
    ],
  };

  let coordinates ={
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.coordinates.latitude,
    longitude: hotel.coordinates.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  }
  return (
    <ScrollView>
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
            size={SIZES.small + 2}
            color={COLORS.gray}
          />

          <HotelMap coordinates={coordinates} />

          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Reviews"}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />
            <TouchableOpacity>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={10} />

          <ReviewsList reviews={hotel.reviews} />
        </View>
        <View style={[reusable.rowWithSpace("space-between"), styles.bottom]}>
          <View>
            <ReusableText
              text={`$${hotel.price}`}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />

            <HeightSpacer height={5} />

            <ReusableText
              text={"Jan 01 - Dec 25"}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.gray}
            />
          </View>

          <ReusableBtn
              onPress={() => navigation.navigate("SelectRoom")}
              btnText={"Select Room"}
              width={(SIZES.width - 50)/2}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
        </View>
      </View>
    </ScrollView>
  );
}

export default HotelDetails
