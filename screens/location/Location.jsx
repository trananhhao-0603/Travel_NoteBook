import React, { useContext, useEffect, useRef } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { UserLocationContext } from '../../context/UserLocationContext';
import { ActivityIndicator } from 'react-native-paper';
import fetchPlaces from '../../hook/fetchPlaces';
import { useIsFocused } from '@react-navigation/native';

const Location = () => {
  const { location, refreshLocation } = useContext(UserLocationContext); // Lấy location từ context
  const { place, placeCoordinates, isLoading, error } = fetchPlaces();
  const mapRef = useRef(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    refreshLocation(); // Lấy lại vị trí người dùng mỗi lần component mount
  }, [refreshLocation,isFocused]);

  useEffect(() => {
    if (location && placeCoordinates.length > 0) {
      const allCoordinates = [
        { latitude: location.coords.latitude, longitude: location.coords.longitude },
        ...placeCoordinates.map((loc) => ({
          latitude: loc.latitude,
          longitude: loc.longitude,
        })),
      ];

      if (mapRef.current) {
        // Đảm bảo rằng khi có dữ liệu vị trí và địa điểm, bản đồ sẽ zoom ra để bao quát tất cả các marker
        mapRef.current.fitToCoordinates(allCoordinates, {
          edgePadding: { top: 30, right: 50, bottom: 50, left: 50 },
          animated: true,
        });
      }
    }
  }, [location, placeCoordinates, isLoading, isFocused]);

  // Xử lý khi đang tải dữ liệu
  if (!location || isLoading) {    
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Xử lý lỗi
  if (error) {
    Alert.alert('Error', 'Failed to load places. Please try again later.');
    return null;
  }

  return (
    <MapView
      ref={mapRef} 
      provider={PROVIDER_GOOGLE}
      style={styles.mapStyle}
    >
      {/* Marker vị trí người dùng */}
      <Marker
        coordinate={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}
        title="You are here"
        pinColor="blue"
      />
      {/* Marker các địa điểm từ fetchPlaces */}
      {placeCoordinates.map((loc, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
          title={loc.title}
        />
      ))}
    </MapView>
  );
};

export default Location;

const styles = StyleSheet.create({
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 30,
    marginBottom: 90,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
