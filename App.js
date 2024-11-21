import { useFonts } from 'expo-font';
import * as Splashscreen from 'expo-splash-screen'
import { useEffect, useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/onboarding/Onboarding';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Search, CountryDetails, Recommended, PlaceDetails, HotelDetails, HotelList, HotelSearch, SelectRoom, Payments, Settings } from './screens';
import * as Location from 'expo-location'
import {UserLocationContext} from './context/UserLocationContext'
const Stack = createNativeStackNavigator();

export default function App() {
  const [location, setLocation] = useState(null);
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf'),
  });
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const onLayoutRootView = useCallback(async ()=> {
    if (fontsLoaded) {
      await Splashscreen.hideAsync();
    }
  },[fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  
  return (
    <UserLocationContext.Provider value={{location,setLocation}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboard"
            component={Onboarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bottom"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CountryDetails"
            component={CountryDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Recommended"
            component={Recommended}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PlaceDetails"
            component={PlaceDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HotelDetails"
            component={HotelDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HotelList"
            component={HotelList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HotelSearch"
            component={HotelSearch}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectRoom"
            component={SelectRoom}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Payments"
            component={Payments}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserLocationContext.Provider>
  );
}

