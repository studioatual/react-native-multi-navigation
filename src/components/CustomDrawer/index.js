import React from 'react';
import { DrawerItemList } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, ScrollView } from 'react-native';

import styles from './styles';

export default function CustomDrawer(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="users" size={50} style={styles.icon} />
        </View>
        <Text style={styles.iconText}>FBS Sistemas</Text>
      </View>
      <DrawerItemList {...props} />
    </ScrollView>
  );
}
