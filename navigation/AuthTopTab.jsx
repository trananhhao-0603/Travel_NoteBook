import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Registration, Singin } from '../screens';
import { COLORS } from '../constants/theme';
import { AssetImage, HeightSpacer } from '../components';

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <HeightSpacer height={80} />
        <AssetImage
        data={require('../assets/images/bg1.png')} 
        mode={"contain"}
        width={'100%'}
        height={170}
        />
        <View style={{height: 600}}>
          <Tab.Navigator>
            <Tab.Screen name="Singin" component={Singin} />
            <Tab.Screen name="Registration" component={Registration} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
}

export default AuthTopTab

const styles = StyleSheet.create({})