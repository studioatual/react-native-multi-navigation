import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import { useAuth } from '../../../contexts/auth';

import styles from './styles';

export default function Dashboard() {
  const navigation = useNavigation();
  const { logOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={styles.btnText}>Open Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={logOut}>
        <Text style={{ color: '#000' }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
