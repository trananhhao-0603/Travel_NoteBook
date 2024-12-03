import { ActivityIndicator, FlatList, View } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, SIZES } from '../../constants/theme'
import ReusableTitle from '../../components/Reusable/ReusableTitle'
import {SafeAreaView} from 'react-native-safe-area-context'
import fetchRecommendations from '../../hook/fetchRecommendations'
const Recommended = ({navigation}) => {
  const {recommendations, isLoading, error, refetch} = fetchRecommendations()
  
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 70 }}>
        <AppBar
          title={"Recommendations"}
          color={COLORS.lightGreen}
          color1={COLORS.lightGreen}
          icon={"search1"}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("Search")}
          top={0}
          left={0}
          right={0}
        />
      </View>

      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue}/>
      ) : (
        <View style={{ marginBottom: 150 }}>
          <FlatList
            data={recommendations}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 10 }}>
                <ReusableTitle
                  item={item}
                  onPress={() => navigation.navigate("PlaceDetails", item._id)}
                />
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

export default Recommended
