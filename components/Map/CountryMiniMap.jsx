import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
const CountryMiniMap = ({placeCoordinates}) => {
    const mapRef = useRef(null);
    useEffect(() => {
        if (mapRef.current) {
          const coordinates = placeCoordinates.map((loc) => ({
            latitude: loc.latitude,
            longitude: loc.longitude,
          }));
          mapRef.current.fitToCoordinates(coordinates, {
            edgePadding: { top: 150, right: 150, bottom: 150, left: 150 },
            animated: true,
          });
        }
      }, [placeCoordinates]);
      return (
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.maps}
        >
          {placeCoordinates.map((location, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.title}
              
            />
          ))}
        </MapView>
      );
}

export default CountryMiniMap

const styles = StyleSheet.create({
    maps: {
        marginVertical: 10,
        height: 300,
        width: '100%',
        borderRadius: 12
    }
})