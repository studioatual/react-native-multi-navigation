import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Config() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Config</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={styles.btnText}>Open Menu</Text>
      </TouchableOpacity>
    </View>
  );
}
