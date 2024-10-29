import { StyleSheet, Text } from 'react-native'
import React from 'react'

const ReusableText = ({text, family, size, color}) => {
  return (
    <Text style = {styles.textStyles(family, size, color)}>{text}</Text>
  )
}

const styles = StyleSheet.create({
    textStyles: (family, size, color)=>({
        fontFamily: family,
        fontSize: size,
        color: color
    })
})
export default ReusableText