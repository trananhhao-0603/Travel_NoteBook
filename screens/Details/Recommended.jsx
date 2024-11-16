import { FlatList, View } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS } from '../../constants/theme'
import ReusableTitle from '../../components/Reusable/ReusableTitle'
import {SafeAreaView} from 'react-native-safe-area-context'
const Recommended = ({navigation}) => {
  const recommendations =  [
    {
        "_id": "64c631650298a05640539adc",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Walt Disney World",
        "location": "U.S.A",
        "imageUrl": "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
        "rating": 4.7,
        "review": "1204 Reviews"
    },
    {
        "_id": "64d062a3de20d7c932f1f70a",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Statue of Liberty",
        "location": "U.S.A",
        "imageUrl": "https://www.fairobserver.com/wp-content/uploads/2024/01/Pakistan-1.jpg",
        "rating": 4.8,
        "review": "1452 Reviews"
    },
    {
        "_id": "64d09e3f364e1c37c8b4b13c",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Golden Gate Bridge",
        "location": "U.S.A",
        "imageUrl": "https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200",
        "rating": 4.6,
        "review": "2145 Reviews"
    },
    {
        "_id": "64d09f90364e1c37c8b4b140",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Yellowstone National Park",
        "location": "U.S.A",
        "imageUrl": "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/024/811/slideshow/c56bd725101bef2aaef43b0def6a24c7/england-london-big-ben-river-night.jpg",
        "rating": 4.8,
        "review": "24455 Reviews"
    },
    {
        "_id": "64d30f789d008909fa8b7ce5",
        "country_id": "64d2fd32618522e2fb342eec",
        "imageUrl": "https://www.shutterstock.com/image-photo/great-wall-china-massive-series-600nw-2490374633.jpg",
        "title": "Yellowstone National Park",
        "location": "U.S.A",
        "rating": 4.8,
        "review": "24455 Reviews"
    }
];
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <View style={{height:80}}>
        <AppBar title={'Recommendations'} color={COLORS.lightGreen} color1={COLORS.lightGreen} icon={'search1'}
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Search')}
        top={20}
        left={0}
        right={0}
        />
      </View>

      <View style={{paddingTop: 10}}>
        <FlatList
        data={recommendations}
        keyExtractor={(item)=>item._id }
        renderItem={({item})=> (
          <View style={{marginBottom: 10}}>
            <ReusableTitle item={item} onPress={()=> navigation.navigate('PlaceDetails',item._id)}/>
          </View>
        )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Recommended
