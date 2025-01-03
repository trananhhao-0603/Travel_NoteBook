import { StyleSheet,  TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants/theme'
import {HeightSpacer, NetworkImage, Rating} from '../../../components/index'
import ReusableText from '../../Reusable/ReusableText'
const HotelCard = ({item,margin,onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
        <View>
            <View style={styles.imageContainer}>
                <NetworkImage
                source={item.imageUrl}
                width={'90%'}
                height={'100%'}
                raidus={16}
                />
            </View>


            <View style={{padding:10}}>
                <ReusableText
                text= {item.title}
                family={'medium'}
                size={SIZES.medium-1}
                color={COLORS.black}
                />

                <HeightSpacer height={5}/>

                <ReusableText
                text= {item.location}
                family={'regular'}
                size={10}
                color={COLORS.gray}
                />

                <HeightSpacer height={5}/>
                <Rating rating={item.rating}/>

            </View>

            
        </View>

      </TouchableOpacity>
    </View>
  )
}

export default HotelCard

const styles = StyleSheet.create({
    card: (margin) => ({
        width: SIZES.width/2.2-4,
        height: 250,
        borderRadius: 16,
        backgroundColor: COLORS.lightWhite,
        margin:margin

    }),
    imageContainer:{
        alignItems: 'center',
        marginTop:10,
        height:120
    }
})