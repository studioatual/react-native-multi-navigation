import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DashRoutes from './dash.routes';
import Config from '../pages/App/Config';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard" drawerContent={CustomDrawer}>
      <Drawer.Screen
        name="Dashboard"
        component={DashRoutes}
        options={{
          drawerLabel: 'Painel Dashboard',
          drawerIcon: () => <FontAwesome5 name="home" size={20} />,
        }}
      />
      <Drawer.Screen
        name="Config"
        component={Config}
        options={{
          drawerLabel: 'Configurações',
          drawerIcon: () => <FontAwesome5 name="cogs" size={20} />,
        }}
      />
    </Drawer.Navigator>
  );
}
