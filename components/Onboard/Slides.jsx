import { View, Image } from 'react-native'
import React from 'react'
import styles from './slides.style'
import {ReusableBtn, ReusableText} from '../../components/index.js'
import { COLORS, SIZES } from '../../constants/theme'

const Slides = ({item}) => {
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style= {styles.stack}>
        <ReusableText
        text= {item.title}
        family={'medium'}
        size={SIZES.xxLarge}
        color={COLORS.white}
        />

        <ReusableBtn  
        onPress={()=> {}}
        btnText={"Let's go"}
        width={(SIZES.width-50)/2.2}
        backgroundColor={COLORS.red}
        borderColor={COLORS.red}
        borderWidth={0}
        textColor={COLORS.white}
        />
      </View>
    </View>
  )
}

export default Slides