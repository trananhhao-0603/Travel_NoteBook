import { useState, useEffect } from 'react';
import axios from 'axios';
import ip from './ip_address';
import checkUser from './checkUser';

const fetchBooking = () => {
  const [booking, setBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {userLogin,userData ,isLoading1, time, token}  = checkUser()


  // Fetch hotel details by ID
  const fetchHotelDetails = async (hotelId) => {
    const response = await axios.get(`http://${ip}:5003/api/hotels/${hotelId}`);
    return response.data;
  };

  // Fetch room details by ID
  const fetchRoomDetails = async (roomId) => {
    const response = await axios.get(`http://${ip}:5003/api/rooms/${roomId}`);    
    return response.data;
  };

  // Fetch bookings and enrich data
  const fetchData = async () => {

    setIsLoading(true);

    try {
      // Fetch initial booking data
      const id =userData._id
      const response = await axios.get(`http://${ip}:5003/api/bookings/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const bookingData = response.data
      // console.log(bookingData);
      

      // Enrich data with hotel and room details
      const enrichedBookings = await Promise.all(
        bookingData.map(async (booking) => {
          const hotelDetails = await fetchHotelDetails(booking.hotel_id);
          const rooms = await Promise.all(
            booking.rooms.map(async (room) => {
              const roomDetails = await fetchRoomDetails(room.room);
              return {
                ...room,
                roomDetails,
              };
            })
          );

          return {
            ...booking,
            hotelDetails,
            rooms,
          };
        })
      );

      setBooking(enrichedBookings);;
      
      
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'An error occurred');
      console.log(err.message);
      
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userData && userData._id && token) {
      fetchData();
    }
  }, [userData, token]);

  const refetch = () => {
    fetchData();
  };

  return { booking, isLoading, error, refetch };
};

export default fetchBooking;
