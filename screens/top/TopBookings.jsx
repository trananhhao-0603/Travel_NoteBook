import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import ReusableTitle from '../../components/Reusable/ReusableTitle';
import { COLORS, SIZES } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';
import fetchBooking from '../../hook/fetchBooking';
import { ReusableBtn } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import ip from '../../hook/ip_address';

const TopBookings = ({ navigation }) => {
  const { booking, isLoading, error, token, refetch } = fetchBooking();
  const [localBookings, setLocalBookings] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      refetch();
      setShowLoading(true);
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isFocused]);

  useEffect(() => {
    // Đồng bộ danh sách local với danh sách từ server
    setLocalBookings(booking);
  }, [booking]);

  const handleDeleteBooking = async (userId, hotelId, token) => {
    try {
      // Cập nhật giao diện ngay lập tức
      const updatedBookings = localBookings.filter(
        (item) => item.user_id !== userId || item.hotel_id !== hotelId
      );
      setLocalBookings(updatedBookings);

      // Gửi yêu cầu xóa đến server
      const response = await axios.delete(`http://${ip}:5003/api/bookings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          user_id: userId,
          hotel_id: hotelId,
        },
      });

      Alert.alert('Successful!', response.data.message);

      // Đồng bộ lại dữ liệu từ server
      refetch();
    } catch (error) {
      console.error('Failed to delete booking:', error.response?.data || error.message);
      refetch(); // Đồng bộ lại nếu có lỗi
    }
  };

  if (showLoading || isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />;
  }

  return (
    <View style={{ margin: 20, marginBottom: 90 }}>
      <FlatList
        data={localBookings}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 15,
              backgroundColor: COLORS.lightWhite,
              borderRadius: 60,
            }}
          >
            <ReusableTitle item={item.hotelDetails} />

            <View
              style={[
                reusable.rowWithSpace('space-between'),
                { margin: 20, marginTop: 0 },
              ]}
            >
              <ReusableBtn
                onPress={() => navigation.navigate('BookingDetails', { item })}
                btnText={'Details'}
                width={(SIZES.width - 50) / 2.3}
                backgroundColor={COLORS.white}
                borderColor={COLORS.blue}
                borderWidth={0.5}
                textColor={COLORS.blue}
              />

              <ReusableBtn
                onPress={() => {
                  Alert.alert('Confirm', 'Are you sure cancel this booking?', [
                    {
                      text: 'Cancel',
                      onPress: () => {},
                    },
                    {
                      text: 'Yes',
                      onPress: () => handleDeleteBooking(item.user_id, item.hotel_id, token),
                    },
                  ]);
                }}
                btnText={'Cancel'}
                width={(SIZES.width - 50) / 2.3}
                backgroundColor={COLORS.red}
                borderColor={COLORS.red}
                borderWidth={0}
                textColor={COLORS.white}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TopBookings;

const styles = StyleSheet.create({});
