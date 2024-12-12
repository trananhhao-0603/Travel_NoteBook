import { ActivityIndicator, ScrollView,  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import styles from './hotelDetails.style'
import { DescriptionText, HeightSpacer, HotelMap, NetworkImage, ReusableBtn, ReusableText, ReviewsList } from '../../components'
import reusable from '../../components/Reusable/reusable.style'
import {Rating} from 'react-native-stock-star-rating'
import {Feather} from '@expo/vector-icons'
import fetchHotelById from '../../hook/fetchHotelById'
import { useRoute } from '@react-navigation/native'

const HotelDetails = ({navigation}) => {
  const route = useRoute();
  const id = route.params
  
  const {hotel,coordinates, isLoading, error, refetch} = fetchHotelById(id)
  
  if (isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue}/>
  }
  
  
  return (
    <>
    <AppBar
          top={40}
          left={10}
          right={10}
          paddingRight={20}
          title={hotel.title}
          color={COLORS.lightGreen}
          icon={"search1"}
          color1={COLORS.lightGreen}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate('HotelSearch')}
        />
    <ScrollView>
      <HeightSpacer height={30}/>
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

          {/* <View style={reusable.rowWithSpace("space-between")}>
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

          <ReviewsList reviews={hotel.reviews} /> */}
        </View>
        <View style={[reusable.rowWithSpace("space-between"), styles.bottom]}>
          <View>
            <ReusableText
              text={`Lowest $${hotel.price}`}
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
              onPress={() => navigation.navigate("SelectRoom",hotel._id)}
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
    </>
  );
}

export default HotelDetails
