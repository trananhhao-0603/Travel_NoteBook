import { FlatList, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import  Slides  from '../../components/Onboard/Slides'
import { SIZES } from '../../constants/theme'
const Onboarding = () => {
  const slides = [
    {
      id: 1,
      image: require('../../assets/images/1.png'),
      title: "Find the perfect hotel to stay"
    }, {
      id: 2,
      image: require('../../assets/images/2.png'),
      title: "Discover the beautiful places"
    }, {
      id: 3,
      image: require('../../assets/images/3.png'),
      title: "Express your interest"
    },
  ]
  return (
    <SafeAreaView>
      <FlatList
        pagingEnabled
        horizontal
        showsVerticalScrollIndicator={false}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Slides item={item} />}
      />
    </SafeAreaView>
  );
}

export default Onboarding

const styles = StyleSheet.create({})