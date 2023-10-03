import React from 'react';
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import QRCodeScannerScreen from './QRCodeScannerScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function tabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Qr Code Scanner" component={QRCodeScannerScreen} />
    </Stack.Navigator>
  );
}

export default function ScanningPage() {
  return (
    <NavigationContainer style={ styles.cont}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Scanner') {
              iconName = focused ? 'camera' : 'camera-outline';
            } 

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Scanner" component={tabs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles   = StyleSheet.create({
  cont: {
    flex: 1,
    width : '100%',
  }

})