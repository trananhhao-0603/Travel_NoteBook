import {  FlatList, StyleSheet, Text, View } from 'react-native'
import React  from 'react'
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import BookingTile from '../../components/Reusable/BookingTile';
import { useRoute } from '@react-navigation/native';

const BookingDetails = ({navigation}) => {
  const router = useRoute()
  const rooms  = router.params.item.rooms
  
  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          title={'Booking Details'}
          color={COLORS.lightGreen}
          onPress={() => navigation.goBack()}
          top={40}
          left={10}
          right={10}
        />
      </View>
      <View style={{ marginBottom: 200 }}>
        <FlatList
          data={rooms}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => 
          <View>
            <BookingTile item={item.roomDetails} item1={item}/>
          </View>}
        />
      </View>
    </View>
  );
}

export default BookingDetails

const styles = StyleSheet.create({})