import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Play from '../assests/icons/play';
import Store from '../assests/icons/Store';
import Menu from '../assests/icons/menu';
import Home from '../screens/Home';
import StackNavigator from './StackNavigator';

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
      }}>
      <Text>Settings!</Text>
    </View>
  );
}
export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name == 'Home') {
              return <Play color={focused ? '#E95847' : '#8692AA'} />;
            }
            if (route.name == 'Settings') {
              return <Menu color={focused ? '#E95847' : '#8692AA'} />;
            }
            if (route.name == 'Store') {
              return <Store color={focused ? '#E95847' : '#8692AA'} />;
            }
          },
        })}
        tabBarOptions={{
          style: {
            elevation: 0,
            borderTopWidth: 0,
            backgroundColor: '#eee',
            paddingBottom: 10,
          },
          tabStyle: {
            borderRadius: 20,
            padding: 22,
            marginHorizontal: 10,
            marginBottom: 20,
          },
          showLabel: false,
          activeBackgroundColor: 'white',
        }}>
        <Tab.Screen name="Home" component={StackNavigator} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Store" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
