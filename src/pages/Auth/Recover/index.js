import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Recover(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recover</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
