import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Me from './src/pages/Me';
import {RootStackParamList} from './src/routers/index.d';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="/Home" component={Home} />
        <Tab.Screen name="/Me" component={Me} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
