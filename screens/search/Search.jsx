import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import styles from './search.styles'
import {Feather,AntDesign} from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import ReusableTitle from '../../components/Reusable/ReusableTitle'
import axios from 'axios'
import ip from '../../hook/ip_address'
const Search = ({navigation}) => {
  const [searchKey, setSearchKey] = useState('')
  const [searchResult, setSearchResults] = useState([])
  const normalizeInput = (text) => {
    return text.normalize("NFC"); // Chuẩn hóa Unicode về dạng chuẩn NFC
  };

  const handleSearch = async() =>{
    try {
      const response = await axios.get(`http://${ip}:5003/api/places/search/${searchKey}`)
      setSearchResults(response.data)
      setSearchKey('')
    } catch (error) {
      console.log("Failed to get products" , error);
    }
  };

  return (
    <SafeAreaView style={reusable.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchBtn} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color={COLORS.black} />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setSearchKey(normalizeInput(text))}
            placeholder="Where do you want to visit"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Feather name="search" size={24} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      {searchResult.length === 0 ? (
        <View>
          <Image
            source={require("../../assets/images/search.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.title}>
              <ReusableTitle
                item={item}
                onPress={() => navigation.navigate("PlaceDetails", item._id)}
              />
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

export default Search

