import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, TEXT } from '../../../constants/theme'
import { NetworkImage, HeightSpacer, ReusableText} from '../../../components/index'
import { useNavigation } from '@react-navigation/native'
const Country = ({item}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CountryDetails', item._id)}>
      <View>

        <NetworkImage source={item.imageUrl}
        width={85}
        height={85}
        raidus={12}
        />

        <HeightSpacer height={5}/>
        <ReusableText
          text= {item.country}
          family={'medium'}
          size={TEXT.small}
          color={COLORS.black}
          align={'center'}
          />

      </View>
    </TouchableOpacity>
  )
}

export default Country