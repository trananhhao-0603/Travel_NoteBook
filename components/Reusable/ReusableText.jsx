import { StyleSheet, Text } from 'react-native'
import React from 'react'

const ReusableText = ({text, family, size, color, align}) => {
  return (
    <Text style = {styles.textStyles(family, size, color, align)}>{text}</Text>
  )
}

const styles = StyleSheet.create({
    textStyles: (family, size, color, align)=>({
        fontFamily: family,
        fontSize: size,
        color: color,
        textAlign: align
    })
})
export default ReusableText