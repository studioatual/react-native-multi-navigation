import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Auth/Login';
import Recover from '../pages/Auth/Recover';

const Stack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Recover" component={Recover} />
    </Stack.Navigator>
  );
}
