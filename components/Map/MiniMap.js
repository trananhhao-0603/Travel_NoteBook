import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'

const MiniMap = ({coordinates,placeCoordinates}) => {
    if (coordinates === undefined){
        return (
          <ActivityIndicator />
        )
      }
      return (
        <TouchableOpacity onPress={() => {}}>
            <MapView style={styles.maps} initialRegion={coordinates}>
                <Marker 
                coordinate={coordinates} 
                title={coordinates.title}
                />
            </MapView>
        </TouchableOpacity>
      )
}

export default MiniMap

const styles = StyleSheet.create({
    maps: {
        marginVertical: 10,
        height: 150,
        width: '100%',
        borderRadius: 12
    }
})