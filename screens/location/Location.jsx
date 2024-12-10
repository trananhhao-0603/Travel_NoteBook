import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import {UserLocationContext} from '../../context/UserLocationContext'
const Location = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0621,
  });
    const {location,setLocation} = useContext(UserLocationContext)

    useEffect(()=>{
        if(location){
            setmapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0522,
                longitudeDelta: 0.0621
            })
        }
    },[location])
    console.log(mapRegion)
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      followsUserLocation={true}
      region={mapRegion}
      style={styles.mapStyle}
    >
      <Marker coordinate={mapRegion} title='You are here' />
    </MapView>
  );
}

export default Location

const styles = StyleSheet.create({
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 10,
    
  }
  
})