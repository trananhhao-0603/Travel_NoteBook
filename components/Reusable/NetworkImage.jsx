import { Image, StyleSheet} from 'react-native'
import React from 'react'

const NetworkImage = ({source, width, height, raidus}) => {
  return (
    <Image
        source={{uri: source}}
        style={styles.image(width, height, raidus)}
    />
  )
}

export default NetworkImage

const styles = StyleSheet.create({
    image: (width, height, raidus)=>({
        width: width,
        height: height,
        borderRadius: raidus,
        resizeMode: "cover"
    })
})