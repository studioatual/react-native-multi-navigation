import React from 'react';
import { StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Dashboard from '../pages/App/Dashboard';
import Dashboard2 from '../pages/App/Dashboard2';

const Tab = createMaterialTopTabNavigator();

export default function DashRoutes() {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Tab.Navigator initialRouteName="Dashboard1">
        <Tab.Screen name="Dashboard1" component={Dashboard} />
        <Tab.Screen name="Dashboard2" component={Dashboard2} />
      </Tab.Navigator>
    </>
  );
}
